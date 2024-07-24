import { useMutation } from "react-query";
import { updateDateComment } from "../api/updateDateComment";

export function useUpdateDateComment() {
  return useMutation(updateDateComment, {
    onSuccess: (data) => {
      console.log("코멘트 수정 성공", data);
    },
    onError: (error) => {
      console.log("코멘트 수정 실패", error);
    },
  });
}
