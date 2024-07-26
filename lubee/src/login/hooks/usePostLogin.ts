import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const couplesInfoResponse = useGetCouplesInfo();

  useEffect(() => {
    api
      .post(`api/users/kakao/simpleLogin?code=${KAKAO_CODE}`)
      .then((res) => {
        const data = res.data as loginResProps; // AxiosResponse의 data를 loginResProps로 단언
        setToken(data.response.accessToken);
        console.log("로그인 성공");
        console.log("로그인 데이터", data);
        console.log("커플정보 얻기", couplesInfoResponse?.success);
        if (couplesInfoResponse?.success) {
          // 로그인 완료되고 온보딩까지 마친 유저의 경우 home/today로 이동
          navigate("/home/today");
        } else {
          // 로그인 완료되고 온보딩이 처음인 유저의 경우 onboarding으로 이동
          navigate("/onboarding");
        }
      })
      .catch((err) => {
        const errorData = err.response.data as loginErrorProps; // 에러 응답 데이터 단언
        if (errorData.success_or_error_code.status === 404) {
          setToken(errorData.response.accessToken);
          navigate("/onboarding");
        } else {
          navigate("/error");
          console.log(KAKAO_CODE);
        }
      });
  }, []);
};

export default usePostLogin;
