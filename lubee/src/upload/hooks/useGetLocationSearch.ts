import { useQuery } from "react-query";
import { getLocationSearch, LocationSearchParams } from "../api/getLocationSearch";

export function useGetLocationSearch({ keyword }: LocationSearchParams) {
  const { data } = useQuery(["getLocationSearch", keyword], () => getLocationSearch({ keyword }), {
    enabled: !!keyword, // keyword가 empty가 아닐때만 query
    onError: (error) => {
      console.log("에러", error);
    },
  });
  return data;
}
