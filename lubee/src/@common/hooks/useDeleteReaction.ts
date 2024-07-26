import { deleteReaction } from "@common/api/deleteReaction";
import { useMutation } from "react-query";

export function useDeleteReaction() {
  return useMutation((memory_id: number) => deleteReaction(memory_id), {
    onSuccess: () => {
      console.log("리액션 삭제 성공");
    },
    onError: (error) => {
      console.log("리액션 삭제 실패", error);
    },
  });
}
