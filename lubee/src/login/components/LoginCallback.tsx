import usePostLogin from "login/hooks/usePostLogin";

const LoginCallback = () => {
  usePostLogin(); //인가코드를 서버에게 보내주는 post통신 hook
  return <div></div>;
};

export default LoginCallback;
