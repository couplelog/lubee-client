import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@common/api/api";
import { loginErrorProps, loginResProps } from "login/types/loginProps";

const usePostLogin = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .post("api/users/kakao/simpleLogin", null, {
        headers: {
          Authorization: `Bearer ${KAKAO_CODE}`,
        },
      })
      .then((res: loginResProps) => {
        console.log("로그인 성공");
        console.log(res);
        // 로그인 완료되고 메인뷰로 이동
        navigate("/home/today");
      })
      .catch((err: loginErrorProps) => {
        if (err.response.data.code === 404) {
          navigate("/onboarding");
        } else {
          navigate("/error");
        }
      });
  }, []);
};

export default usePostLogin;
