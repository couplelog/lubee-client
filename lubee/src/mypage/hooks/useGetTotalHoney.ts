import { useQuery } from "react-query";
import { getTotalHoney } from "../api/getTotalHoney";

export function useGetTotalHoney() {
  const { data } = useQuery("getTotalHoney", () => getTotalHoney(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return { data };
}
