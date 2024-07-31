import { useQuery } from "react-query";
import { getLubeeCode } from "../api/getLubeeCode";

export function useGetLubeeCode() {
  const { data, refetch } = useQuery("getLubeeCode", () => getLubeeCode(), {
    refetchInterval: 3000, // 3초마다 데이터를 refetch
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return { data, refetch };
}
