import { useMutation } from "react-query";
import { postLoginUser } from "onboarding/api/postLoginUser";

export function usePostLoginUser() {
  return useMutation(postLoginUser, {
    onSuccess: (data) => {
      console.log("로그인한 유저가 맞고 커플이 맞다", data);
    },
    onError: (error) => {
      console.log("사용자가 존재하지 않거나 해당 유저는 커플이 아니거나 기타에러", error);
    },
  });
}
