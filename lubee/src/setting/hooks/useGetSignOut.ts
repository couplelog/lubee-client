import { useQuery } from "react-query";
import { getSignOut } from "../api/getSignOut";

export function useGetSignOut() {
  const { data } = useQuery("getSignOut", () => getSignOut(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
