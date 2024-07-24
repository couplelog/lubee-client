import { useQuery } from "react-query";
import { getSpecificCalendar, RequestParams } from "home/api/getSpecificCalendar";

export function useGetSpecificCalendar({ year, month, day }: RequestParams) {
  const { data } = useQuery(["getLocationSearch", year, month, day], () => getSpecificCalendar({ year, month, day }), {
    onError: (error) => {
      console.log("에러", error);
    },
  });
  return data;
}
