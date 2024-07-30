import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [fetchCouplesInfo, setFetchCouplesInfo] = useState(false); // Ensure getCouplesInfo is called only once

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .post(`api/users/kakao/simpleLogin?code=${KAKAO_CODE}`)
        .then((res) => {
          const data = res.data as loginResProps; // Assert data as loginResProps
          setToken(data.response.accessToken);
          setIsLoggedIn(true); // Update login state on success
          setFetchCouplesInfo(true); // Set flag to fetch couple info
          console.log("로그인 성공");
          console.log("로그인 데이터", data);
        })
        .catch((err) => {
          const errorData = err.response.data as loginErrorProps; // Assert error data as loginErrorProps
          if (errorData.success_or_error_code.status === 404) {
            setToken(errorData.response.accessToken);
            console.log("404 에러");
            navigate("/login");
          } else {
            console.log("로그인 실패");
            console.log("KAKAO_CODE", KAKAO_CODE);
            navigate("/error");
          }
        });
    }
  }, [KAKAO_CODE, navigate]);

  const { data: couplesInfoResponse, isLoading, error } = useGetCouplesInfo(fetchCouplesInfo); // Depend on fetchCouplesInfo

  useEffect(() => {
    if (fetchCouplesInfo && !isLoading) {
      console.log("커플정보 얻기", couplesInfoResponse?.success);
      if (couplesInfoResponse?.success) {
        console.log(couplesInfoResponse);
        navigate("/loading");
      } else {
        navigate("/onboarding");
      }
      setFetchCouplesInfo(false); // Reset the flag after the request completes
    } else if (fetchCouplesInfo && !isLoading && error) {
      console.log("커플 정보 가져오기 실패", error);
      navigate("/onboarding");
      setFetchCouplesInfo(false); // Reset the flag after the request completes
    }
  }, [fetchCouplesInfo, isLoading, couplesInfoResponse, error, navigate]);

  return null;
};

export default usePostLogin;
