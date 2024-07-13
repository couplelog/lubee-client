import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnWrapper } from "@styles/btnStyle";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import TitleBox from "../components/TitleBox";
import OnboardingBtn from "../components/OnboardingBtn";
import { profileCustomIconsData } from "@common/core/ProfileCustomIconsData";
interface CustomProps {
  moveToOnboardingCode: () => void;
  moveToOnboardingProfile: () => void;
}

export default function index(props: CustomProps) {
  const { moveToOnboardingCode, moveToOnboardingProfile } = props;
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const isOnboardingBtnDisabled = selectedProfile === null;

  function handleBackBtn() {
    moveToOnboardingCode();
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleProfileClick(profileIndex: any) {
    setSelectedProfile(profileIndex);
  }

  function handleOnboardingBtn() {
    moveToOnboardingProfile();
    {
      state: {
        selectedProfile;
      }
    }
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={1} />
      <TitleBox titleText="프로필 캐릭터를 지정해주세요" subtitleText="러비에서만 보여지는 프로필이에요" />
      <ProfileGrid>
        {profileCustomIconsData.map((profile, index) => (
          <BtnWrapper type="button" key={index} onClick={() => handleProfileClick(index)}>
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

const ProfileIcon = styled.svg`
  width: 14.4rem;
  height: 14.4rem;
`;
