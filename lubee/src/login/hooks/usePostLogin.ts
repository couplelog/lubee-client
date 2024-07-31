import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

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

  // useGetCouplesInfo를 호출하는 로직을 useEffect 외부로 이동
  // isLoading이 false일 때만 get 실행
  const couplesInfo = useGetCouplesInfo(isLoggedIn);
  console.log("couplesInfo", couplesInfo);
  console.log("couplesInfo.data===undefined", couplesInfo.data === undefined);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     if (couplesInfo.data?.success_or_error_code !== undefined) {
  //       if (couplesInfo.data.success_or_error_code.message === "요청 성공") {
  //         navigate("/loading");
  //       } else {
  //         navigate("/onboarding");
  //       }
  //     }
  //   }
  // }, [isLoggedIn, couplesInfo, navigate, couplesInfo.error]);
  // Fetch couples info only when logged in
  const { data, error } = useGetCouplesInfo(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      if (data?.success_or_error_code !== undefined) {
        if (data.success_or_error_code.message === "요청 성공") {
          navigate("/loading");
        } else {
          navigate("/onboarding");
        }
      }
    }
  }, [isLoggedIn, data, navigate, error]);
};

export default usePostLogin;
