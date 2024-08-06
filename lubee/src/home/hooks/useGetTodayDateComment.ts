import { useQuery } from "react-query";
import { getTodayDateComment } from "../api/getTodayDateComment";

export function useGetTodayDateComment(date: string) {
  const queryResult = useQuery(["getTodayDateComment", date], () => getTodayDateComment({ date }), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return queryResult;
}
