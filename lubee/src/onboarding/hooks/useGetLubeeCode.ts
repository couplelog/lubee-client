import { useQuery } from "react-query";
import { getLubeeCode } from "../api/getLubeeCode";

export function useGetLubeeCode() {
  const { data, refetch } = useQuery("getLubeeCode", () => getLubeeCode(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return { data, refetch };
}
