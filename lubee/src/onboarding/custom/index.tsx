import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnWrapper } from "@styles/btnStyle";
import OnboardingHeader from "../components/OnboardingHeader";
import ProgressBar from "../components/ProgressBar";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import OnboardingBtn from "../components/OnboardingBtn";
import { profileIconsData } from "@common/core/profileIconsData";
import { useRecoilState } from "recoil";
import { profileState } from "@common/recoil/atom";

interface CustomProps {
  moveToOnboardingCode: () => void;
  moveToOnboardingProfile: () => void;
}

export default function index(props: CustomProps) {
  const { moveToOnboardingCode, moveToOnboardingProfile } = props;
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const isOnboardingBtnDisabled = selectedProfile === null;
  const [_profile, setProfile] = useRecoilState(profileState);

  // 프로필 아이콘 중에 "me"만 filter
  const myProfileIcons = profileIconsData.find((data) => data.account === "me")?.profileIcon || [];

  function handleBackBtn() {
    moveToOnboardingCode();
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleProfileClick(profileIndex: number) {
    setSelectedProfile(profileIndex);
  }

  function handleOnboardingBtn() {
    if (selectedProfile !== null) {
      // 선택된 프로필 아이콘의 emoji를 Recoil 상태에 저장
      const selectedProfileEmoji = myProfileIcons[selectedProfile].emoji;
      setProfile(selectedProfileEmoji);

      // 저장된 값을 콘솔에 출력
      console.log("Selected Profile Emoji:", selectedProfileEmoji);
    }
    moveToOnboardingProfile();
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={1} />
      <OnboardingTitleBox titleText="프로필 캐릭터를 지정해주세요" subtitleText="러비에서만 보여지는 프로필이에요" />
      <ProfileGrid>
        {myProfileIcons.map((data, index) => (
          <BtnWrapper type="button" key={index} onClick={() => handleProfileClick(index)}>
            <ProfileIcon as={selectedProfile === index ? data.hoverIconSrc : data.iconSrc} />
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
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ProfileGrid = styled.section`
  display: grid;
  gap: 2rem 3.6rem;
  margin-top: 2.8rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

const ProfileIcon = styled.svg`
  width: 14.4rem;
  height: 14.4rem;

  @media (height <= 800px) {
    width: 12rem;
    height: 12rem;
  }

  @media (height <= 600px) {
    width: 10rem;
    height: 10rem;
  }

  @media (height <= 400px) {
    width: 8rem;
    height: 8rem;
  }
`;
