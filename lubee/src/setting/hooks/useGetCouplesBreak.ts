import { useQuery } from "react-query";
import { getCouplesBreak } from "../api/getCouplesBreak";

export function useGetCouplesBreak() {
  const { data } = useQuery("getCouplesBreak", () => getCouplesBreak(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
