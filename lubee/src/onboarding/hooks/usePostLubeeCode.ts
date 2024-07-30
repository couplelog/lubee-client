import { useMutation } from "react-query";
import { postLubeeCode } from "../api/postLubeeCode";

export function usePostLubeeCode(onSuccessCallback: () => void) {
  return useMutation(postLubeeCode, {
    onSuccess: (data) => {
      console.log("커플 연결 성공", data);
      onSuccessCallback(); // 성공 시 콜백 함수(custom 페이지로 넘어가는 함수) 호출
    },
    onError: (error) => {
      console.log("커플 연결 실패", error);
    },
  });
}
