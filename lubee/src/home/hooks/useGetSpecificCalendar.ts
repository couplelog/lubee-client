import { useQuery } from "react-query";
import { getSpecificCalendar, RequestParams } from "home/api/getSpecificCalendar";

export function useGetSpecificCalendar({ year, month, day }: RequestParams) {
  const { data, refetch } = useQuery(
    ["getSpecificCalendar", year, month, day],
    () => getSpecificCalendar({ year, month, day }),
    {
      refetchInterval: 3000, // 3초마다 데이터를 refetch
      onError: (error) => {
        console.log("에러", error);
      },
    },
  );
  return { data, refetch };
}
