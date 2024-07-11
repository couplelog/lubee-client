import { useState, useEffect, useRef } from "react";
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
  const [selectedProfile, setSelectedProfile] = useState(location.state?.selectedProfile);
  const isOnboardingBtnDisabled = nickname === "";
  const yellowBoxRef = useRef<{ focus: () => void }>(null);

  useEffect(() => {
    // 페이지가 로드되고 나서 입력 필드에 포커스를 설정
    if (yellowBoxRef.current) {
      yellowBoxRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // location.state가 없을 경우 기본 프로필로 Profile1Ic로
    if (selectedProfile === undefined) {
      setSelectedProfile(null);
    }
  }, [location.state]);

  function handleBackBtn() {
    navigate("/onboarding/custom");
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
      <ProgressBar step={2} />
      <ContentsContainer>
        <TitleBox titleText="닉네임을 지정해주세요" subtitleText="러비에서 쓰일 애칭이에요" />
        <BtnWrapper onClick={handleProfileBtn}>
          {selectedProfile !== null && Profiles[selectedProfile] ? (
            <ProfileIcon as={Profiles[selectedProfile].default} />
          ) : (
            <ProfileIcon as={Profile1Ic} />
          )}
        </BtnWrapper>

        <YellowBox
          inputValue={nickname}
          setInputValue={setNickname}
          $disabled={true}
          placeholder="닉네임 입력"
          ref={yellowBoxRef}
        />
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
