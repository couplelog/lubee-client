import { useQuery } from "react-query";
import { getCalendar } from "home/api/getCalendar";

export function useGetCalendar() {
  const { data } = useQuery("getCalendar", () => getCalendar(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
