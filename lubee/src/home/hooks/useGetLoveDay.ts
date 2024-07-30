import { useQuery } from "react-query";
import { getLoveDay } from "../api/getLoveDay";

export function useGetLoveDay() {
  const { data } = useQuery("getLoveDay", () => getLoveDay(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
