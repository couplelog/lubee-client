import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Profile1Ic } from "@assets/index";
import Header from "@components/onboarding/Header";
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
      <TitleBox titleText="연인의 러비코드를 입력하세요" subtitleText="러비에서 쓰일 애칭이에요" />
      <ProfileIcon />
      <NumberBox inputValue={nickname} setInputValue={setNickname} $disabled={true} placeholder="닉네임 입력" />
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

const ProfileIcon = styled(Profile1Ic)`
  width: 16rem;
  height: 16rem;
`;
