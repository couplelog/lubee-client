import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Profile1Ic } from "@assets/index";
import Header from "@components/onboarding/Header";
import ProgressBar from "@components/onboarding/ProgressBar";
import TitleBox from "@components/onboarding/TitleBox";
import NumberBox from "@components/onboarding/NumberBox";
import OnboardingBtn from "@components/onboarding/OnboardingBtn";

export default function OnboardingProfilePage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const isOnboardingBtnDisabled = nickname === "";

  function handleBackBtn() {
    navigate("/Onboarding");
  }

  function handleXBtn() {
    navigate("/Login");
  }

  function handleOnboardingBtn() {
    navigate("/OnboardingProfileBirth");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={1} />
      <ContentsContainer>
        <TitleBox titleText="프로필과 닉네임을 지정해주세요" subtitleText="러비에서 쓰일 애칭이에요" />
        <ProfileIcon />
        <NumberBox inputValue={nickname} setInputValue={setNickname} $disabled={true} placeholder="닉네임 입력" />
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

const ContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  align-items: center;
`;

const ProfileIcon = styled(Profile1Ic)`
  width: 16rem;
  height: 16rem;
`;
