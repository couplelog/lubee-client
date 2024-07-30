import { useQuery } from "react-query";
import { getCouplesInfo } from "@common/api/getCouplesInfo";

// isLoggedIn 기본값을 true로 설정
export function useGetCouplesInfo(isLoggedIn: boolean = true) {
  const { data, isLoading, error } = useQuery("getCouplesInfo", getCouplesInfo, {
    enabled: isLoggedIn, // isLoggedIn이 true일 때만 쿼리 실행
    onError: () => {
      console.log("커플정보가져오기 에러", error);
    },
  });
  return { data, isLoading, error };
}
