import { useQuery } from "react-query";
import { getCouplesInfo } from "@common/api/getCouplesInfo";
import { useNavigate } from "react-router-dom";

// isLoggedIn 기본값을 true로 설정
export function useGetCouplesInfo(isLoggedIn: boolean = true) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery("getCouplesInfo", getCouplesInfo, {
    enabled: isLoggedIn, // isLoggedIn이 true일 때만 쿼리 실행
    onError: () => {
      navigate("/onboarding");
    },
  });
  return { data, isLoading, error };
}
