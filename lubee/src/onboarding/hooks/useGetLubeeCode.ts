import { useQuery } from "react-query";
import { getLubeeCode } from "../api/getLubeeCode";
import { ResponseTypes } from "../api/getLubeeCode";

export function useGetlubeeCode() {
  const result = useQuery<ResponseTypes, Error>(["getLubeeCode"], getLubeeCode, {
    onError: (error) => {
      console.log("사용자가 존재하지 않습니다.", error);
    },
  });

  return result;
}
