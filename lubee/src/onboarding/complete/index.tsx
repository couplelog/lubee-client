import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CongratIc, CompleteIc } from "@assets/index";
import TitleBox from "congrats/components/CongratsTitleBox";
import OnboardingBtn from "../components/OnboardingBtn";

export default function index() {
  const navigate = useNavigate();

  function handleOnboardingBtn() {
    navigate("/home/today");
  }

  return (
    <Wrapper>
      <CongratIcon />
      <CompleteIcon />
      <TitleBox titleText="작성 완료!" subtitleText="연인과 함께 꿀 모으러 가볼까요?" />
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="오늘 홈으로" $disabled={false} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CongratIcon = styled(CongratIc)`
  width: 39.843rem;
  height: 44.7055rem;
`;

const CompleteIcon = styled(CompleteIc)`
  position: absolute;
  top: 10.261rem;
  left: 0;
  width: 30.1498rem;
  height: 23.6735rem;
`;
