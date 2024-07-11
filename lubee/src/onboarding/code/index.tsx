import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import TitleBox from "../components/TitleBox";
import YellowBox from "../components/YellowBox";
import OnboardingBtn from "../components/OnboardingBtn";

export default function index() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const isOnboardingBtnDisabled = code === "";

  function handleBackBtn() {
    navigate("/onboarding");
  }

  function handleOnboardingBtn() {
    navigate("/onboarding/custom");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} showBackIcon />
      <ContentsContainer>
        <TitleBox titleText="연인의 러비코드를 입력하세요" />
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
  height: 100vh;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.8rem;
  align-items: center;
`;
