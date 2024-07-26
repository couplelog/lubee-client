import { useMutation } from "react-query";
import { postLoginUser } from "login/api/postLoginUser";

export function usePostLoginUser() {
  return useMutation(postLoginUser, {
    onSuccess: (data) => {
      console.log("로그인한 유저가 맞고 커플이 맞다", data);
    },
    onError: (error) => {
      console.log("코멘트 전송 실패", error);
    },
  });
}
