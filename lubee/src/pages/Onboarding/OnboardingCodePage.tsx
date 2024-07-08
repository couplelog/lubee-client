import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardingBtn from "@components/onboarding/OnboardingBtn";
import Header from "@components/onboarding/Header";
import TitleBox from "@components/onboarding/TitleBox";
import NumberBox from "@components/onboarding/NumberBox";

export default function OnboardingCodePage() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/Onboarding");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} showBackIcon />
      <TitleBox titleText="연인의 러비코드를 입력하세요" />
      <BtnWrapper>
        <NumberBox>12345 67890</NumberBox>
      </BtnWrapper>
      <OnboardingBtn text="연결하기" $disabled={true} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const BtnWrapper = styled.button`
  cursor: pointer;
`;
