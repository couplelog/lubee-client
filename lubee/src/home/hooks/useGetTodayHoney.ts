import { useQuery } from "react-query";
import { getTodayHoney } from "../api/getTodayHoney";

export function useGetTodayHoney(date: string) {
  const { data } = useQuery(["getTodayHoney", date], () => getTodayHoney({ date }), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return data;
}
