import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [_token, setTokenState] = useState("");

  useEffect(() => {
    const loginAndFetchCoupleInfo = async () => {
      if (KAKAO_CODE) {
        try {
          const res = await api.post(`api/users/kakao/simpleLogin?code=${KAKAO_CODE}`);
          const data = res.data as loginResProps;
          setToken(data.response.accessToken);
          setTokenState(data.response.accessToken);
          setIsLoggedIn(true);
          console.log("로그인 성공");
          console.log("로그인 데이터", data);
          console.log("isLoggedIn", isLoggedIn);

          const couplesInfoResponse = await useGetCouplesInfo(true);
          if (couplesInfoResponse.data?.success) {
            console.log("커플정보 얻기 성공:", couplesInfoResponse);
            navigate("/loading");
          } else {
            console.error("커플 정보 가져오기 실패:", couplesInfoResponse?.error);
            navigate("/onboarding");
          }
        } catch (err) {
          if (isAxiosError(err)) {
            const errorData = err.response?.data as loginErrorProps;
            if (errorData?.success_or_error_code.status === 404) {
              setToken(errorData.response.accessToken);
              setTokenState(errorData.response.accessToken);
              navigate("/onboarding");
            } else {
              console.error("로그인 에러:", err);
              navigate("/error");
            }
          } else {
            console.error("Unexpected error:", err);
            navigate("/error");
          }
        }
      }
    };

    loginAndFetchCoupleInfo();
  }, [KAKAO_CODE, navigate]);

  return null;
};

// Type guard to check if the error is an Axios error
function isAxiosError(error: unknown): error is import("axios").AxiosError {
  return (error as import("axios").AxiosError).isAxiosError !== undefined;
}

export default usePostLogin;
