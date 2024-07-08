import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Profile1Ic } from "@assets/index";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import TitleBox from "../components/TitleBox";
import NumberBox from "../components/NumberBox";
import OnboardingBtn from "../components/OnboardingBtn";

export default function index() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  const isOnboardingBtnDisabled = nickname === "";

  function handleBackBtn() {
    navigate("/Onboarding");
  }

  function handleXBtn() {
    navigate("/Login");
  }

  function handleProfileBtn() {
    navigate("/onboarding/custom");
  }

  function handleOnboardingBtn() {
    navigate("/onboarding/birth");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={1} />
      <ContentsContainer>
        <TitleBox titleText="프로필과 닉네임을 지정해주세요" subtitleText="러비에서 쓰일 애칭이에요" />
        <BtnWrapper onClick={handleProfileBtn}>
          <ProfileIcon />
        </BtnWrapper>
        <NumberBox inputValue={nickname} setInputValue={setNickname} $disabled={true} placeholder="닉네임 입력" />
      </ContentsContainer>
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="다음" $disabled={isOnboardingBtnDisabled} />
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

const BtnWrapper = styled.button`
  cursor: pointer;
`;

const ProfileIcon = styled(Profile1Ic)`
  width: 16rem;
  height: 16rem;
`;
