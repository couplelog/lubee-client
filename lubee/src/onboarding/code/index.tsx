import { useState } from "react";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import YellowBox from "../components/YellowBox";
import OnboardingBtn from "../components/OnboardingBtn";

interface CodeProps {
  moveToOnboardingConnect: () => void;
  moveToOnboardingCustom: () => void;
}

export default function index(props: CodeProps) {
  const { moveToOnboardingConnect, moveToOnboardingCustom } = props;
  const [code, setCode] = useState("");

  const isOnboardingBtnDisabled = code === "";

  function handleBackBtn() {
    moveToOnboardingConnect();
  }

  function handleOnboardingBtn() {
    moveToOnboardingCustom();
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} showBackIcon />
      <ContentsContainer>
        <OnboardingTitleBox titleText="연인의 러비코드를 입력하세요" />
        <YellowBox inputValue={code} setInputValue={setCode} $disabled={true} placeholder="코드 입력" />
      </ContentsContainer>
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="연결하기" $disabled={isOnboardingBtnDisabled} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.8rem;
  align-items: center;
`;
