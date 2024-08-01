import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .post(`api/users/kakao/simpleLogin?code=${KAKAO_CODE}`)
        .then((res) => {
          const data = res.data as loginResProps; // AxiosResponse의 data를 loginResProps로 단언
          setToken(data.response.accessToken);
          setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
          console.log("로그인 성공");
        })
        .catch((err) => {
          const errorData = err.response.data as loginErrorProps; // 에러 응답 데이터 단언
          if (errorData.success_or_error_code.status === 404) {
            console.log("404에러");
            navigate("/login");
          } else {
            console.log("로그인 실패");
            navigate("/error");
          }
        });
    }
  }, [KAKAO_CODE, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get(`api/couples/couple_info`)
        .then((res) => {
          const data = res.data as loginResProps; // AxiosResponse의 data를 loginResProps로 단언
          console.log("data", data);
          if (data) {
            console.log("data.success_or_error_code !== undefined", data.success_or_error_code !== undefined);
            if (data.success_or_error_code !== undefined) {
              console.log("data.success_or_error_code.message", data.success_or_error_code.message);
              if (data.success_or_error_code.message === "요청 성공") {
                navigate("/loading");
              }
            }
          }
        })
        .catch((err) => {
          const errorData = err.response.data as loginErrorProps; // 에러 응답 데이터 단언
          if (errorData.success_or_error_code.status === 404) {
            console.log("404에러");
            navigate("/onboarding");
          }
        });
    }
  }, [isLoggedIn, navigate]);
};

export default usePostLogin;
