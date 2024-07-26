import { useQuery } from "react-query";
import { getTodayDateComment } from "../api/getTodayDateComment";

export function useGetTodayDateComment(coupleId: number, date: string) {
  const { data } = useQuery(["getTodayDateComment", coupleId, date], () => getTodayDateComment({ coupleId, date }), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return data;
}
