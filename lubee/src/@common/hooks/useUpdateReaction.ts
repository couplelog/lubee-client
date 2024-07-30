import { updateReaction } from "@common/api/updateReaction";
import { useMutation } from "react-query";

export function useUpdateReaction() {
  return useMutation(updateReaction, {
    onSuccess: () => {
      console.log("리액션 수정 성공");
    },
    onError: (error) => {
      console.log("리액션 수정 실패", error);
    },
  });
}
