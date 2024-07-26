import { useMutation } from "react-query";
import { postDateComment } from "../api/postDateComment";

export function usePostDateComment() {
  return useMutation(postDateComment, {
    onSuccess: (data) => {
      console.log("코멘트 전송 성공", data);
    },
    onError: (error) => {
      console.log("코멘트 전송 실패", error);
    },
  });
}
