import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import TitleBox from "../components/TitleBox";
import ProfileIcons from "@common/components/ProfileIcons";
import OnboardingBtn from "../components/OnboardingBtn";

export default function index() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const isOnboardingBtnDisabled = selectedProfile === null;

  function handleBackBtn() {
    navigate("/onboarding/code");
  }

  function handleXBtn() {
    navigate("/onboarding/login");
  }

  function handleProfileClick(profileIndex: any) {
    setSelectedProfile(profileIndex);
    localStorage.setItem("selectedProfile", profileIndex.toString()); // 로컬 스토리지에 저장
  }

  function handleOnboardingBtn() {
    navigate("/onboarding/profile", { state: { selectedProfile } });
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={1} />
      <TitleBox titleText="프로필 캐릭터를 지정해주세요" subtitleText="러비에서만 보여지는 프로필이에요" />
      <ProfileGrid>
        {ProfileIcons.map((profile, index) => (
          <BtnWrapper key={index} onClick={() => handleProfileClick(index)}>
            <ProfileIcon as={selectedProfile === index ? profile.selected : profile.default} />
          </BtnWrapper>
        ))}
      </ProfileGrid>
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

const ProfileGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 3.6rem;
  justify-items: center;
  margin-top: 2.8rem;
`;

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const ProfileIcon = styled.svg`
  width: 14.4rem;
  height: 14.4rem;
`;
