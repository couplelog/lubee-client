import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";
import { setToken } from "login/utils/token";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .post(`api/users/kakao/simpleLogin?code=${KAKAO_CODE}`)
      .then((res: loginResProps) => {
        const { accessToken } = res.data.data;
        setToken(accessToken);
        console.log("로그인 성공");
        console.log(res);
        // 로그인 완료되고 메인뷰로 이동
        navigate("/home/today");
      })
      .catch((err: loginErrorProps) => {
        if (err.response.data.code === 404) {
          setToken(err.response.data.data.accessToken);
          navigate("/onboarding");
        } else {
          navigate("/error");
          console.log(KAKAO_CODE);
        }
      });
  }, []);
};

export default usePostLogin;
