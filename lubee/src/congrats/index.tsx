import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import OnboardingBtn from "onboarding/components/OnboardingBtn";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";
import { infoToast } from "@common/utils/toast";
import { useEffect } from "react";

export default function index() {
  const navigate = useNavigate();
  const { data: couplesInfoResponse } = useGetCouplesInfo();

  // 한명만 날려도 couplesInfo response는 success가 뜸
  console.log("커플정보를 얻을 수 있는지 확인 ", couplesInfoResponse?.success);
  console.log(couplesInfoResponse);
  console.log("확인", couplesInfoResponse?.success_or_error_code === null);
  console.log("생일확인", couplesInfoResponse?.response.birthday_second !== null);

  // couplesInfoResponse가 변경될 때마다 조건 체크
  useEffect(() => {
    if (couplesInfoResponse?.success !== undefined) {
      navigate("/home/today");
    } else if (couplesInfoResponse) {
      infoToast("연인이 커플정보를 입력하지 않았어요!");
    }
  }, [couplesInfoResponse, navigate]);

  function handleOnboardingBtn() {
    if (couplesInfoResponse?.success !== undefined) {
      navigate("/home/today");
    } else {
      infoToast("연인이 커플정보를 입력하지 않았어요!");
    }
  }

  return (
    <Container>
      <Outlet />
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="오늘 홈으로" $disabled={false} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
