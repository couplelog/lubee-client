import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import OnboardingBtn from "onboarding/components/OnboardingBtn";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";
import { infoToast } from "@common/utils/toast";

export default function index() {
  const navigate = useNavigate();
  const couplesInfoResponse = useGetCouplesInfo();
  console.log("커플정보를 얻을 수 있는지 확인 ", couplesInfoResponse?.success);

  function handleOnboardingBtn() {
    if (couplesInfoResponse?.success) {
      // 둘다 온보딩 post를 날려서 커플정보를 얻을 수 있는 경우
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
