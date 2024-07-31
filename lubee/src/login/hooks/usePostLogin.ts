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

  const couplesInfo = useGetCouplesInfo(isLoggedIn);

  // couplesInfoResponse가 변경될 때마다 조건 체크
  useEffect(() => {
    if (couplesInfo.data) {
      const status = couplesInfo.data.success_or_error_code?.status; // 안전하게 status 가져오기
      if (status === 200) {
        navigate("/loading");
      } else {
        navigate("/onboarding");
      }
    }
  }, [couplesInfo.data, navigate]);

  // 로그인 상태와 couplesInfo.data가 존재할 때 체크
  useEffect(() => {
    if (isLoggedIn && couplesInfo.data) {
      const status = couplesInfo.data.success_or_error_code?.status; // 안전하게 status 가져오기
      if (status === 200) {
        navigate("/loading");
      } else {
        navigate("/onboarding");
      }
    }
  }, [isLoggedIn, couplesInfo.data, navigate, couplesInfo.error]);

  console.log("couplesInfo", couplesInfo);
  console.log("couplesInfo.data===undefined", couplesInfo.data === undefined);
};

export default usePostLogin;
