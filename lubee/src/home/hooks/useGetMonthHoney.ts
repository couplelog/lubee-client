import { useQuery } from "react-query";
import { getMonthHoney } from "../api/getMonthHoney";

export function useGetMonthHoney(year: number, month: number) {
  const { data } = useQuery(["getMonthHoney", year, month], () => getMonthHoney({ year, month }), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return data;
}
