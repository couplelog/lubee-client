import { postReaction, PostReactionDataTypes } from "@common/api/postReaction";
import { useMutation } from "react-query";

export function usePostReaction() {
  return useMutation((data: PostReactionDataTypes) => postReaction(data), {
    onSuccess: () => {
      console.log("리액션 업로드 성공");
    },
    onError: (error) => {
      console.log("리액션 업로드 실패", error);
    },
  });
}
