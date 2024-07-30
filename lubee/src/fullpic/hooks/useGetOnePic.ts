import { useQuery } from "react-query";
import { getOnePic } from "fullpic/api/getOnePic";

export function useGetOnePic(memory_id: number) {
  const { data, isLoading, error } = useQuery(["getOnePic", memory_id], () => getOnePic(memory_id), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return { data, isLoading, error };
}
