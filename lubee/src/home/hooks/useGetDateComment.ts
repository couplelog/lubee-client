import { useQuery } from "react-query";
import { getDateComment } from "../api/getDateComment";

export function useGetDateComment(id: number) {
  const { data, error, isLoading } = useQuery(["getDateComment", id], () => getDateComment({ id }), {
    onError: (error) => {
      console.log("데이트코멘트가 존재하지 않습니다.", error);
    },
  });

  return { data, error, isLoading };
}
