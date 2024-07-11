import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Profile1Ic } from "@assets/index";
import { BtnWrapper } from "@styles/globalStyle";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import TitleBox from "../components/TitleBox";
import YellowBox from "../components/YellowBox";
import OnboardingBtn from "../components/OnboardingBtn";
import Profiles from "../../@common/components/ProfileIcons";

export default function index() {
  const navigate = useNavigate();
  const location = useLocation();
  const [nickname, setNickname] = useState("");

  const isOnboardingBtnDisabled = nickname === "";
  const selectedProfile = location.state?.selectedProfile;

  function handleBackBtn() {
    navigate("/onboarding");
  }

  function handleXBtn() {
    navigate("/login");
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
          {selectedProfile !== undefined ? (
            <ProfileIcon as={Profiles[selectedProfile].default} />
          ) : (
            <ProfileIcon as={Profile1Ic} />
          )}
        </BtnWrapper>
        <YellowBox inputValue={nickname} setInputValue={setNickname} $disabled={true} placeholder="닉네임 입력" />
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

const ProfileIcon = styled.svg`
  width: 16rem;
  height: 16rem;
`;
