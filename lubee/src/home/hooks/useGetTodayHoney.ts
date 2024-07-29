import { useQuery } from "react-query";
import { getTodayHoney } from "../api/getTodayHoney";

export function useGetTodayHoney(date: string) {
  const queryResult = useQuery(["getTodayHoney", date], () => getTodayHoney({ date }), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  // queryResult에는 data, isLoading, isFetching 등이 모두 포함됨.
  // 꿀 개수 조회로 축하 페이지 이동 위한 isLoading, isFetching
  return queryResult;
}
