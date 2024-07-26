import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import ProgressBar from "../components/ProgressBar";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import YellowBox from "../components/YellowBox";
import OnboardingBtn from "../components/OnboardingBtn";
import { useRecoilState } from "recoil";
import { profileState, nicknameState } from "@common/recoil/atom";

interface ProfileProps {
  moveToOnboardingCustom: () => void;
  moveToOnboardingBirth: () => void;
}

export default function index(props: ProfileProps) {
  const { moveToOnboardingCustom, moveToOnboardingBirth } = props;
  const navigate = useNavigate();
  const yellowBoxRef = useRef<{ focus: () => void }>(null);
  const [profileEmoji] = useRecoilState(profileState); // 프로필 이모지 상태
  const [nickname, setNickname] = useRecoilState(nicknameState); // 닉네임 상태
  const isOnboardingBtnDisabled = nickname === "";
  const myProfile = getProfileIconSrc("me", profileEmoji); // Recoil 상태에서 emoji 값을 가져옴

  useEffect(() => {
    // 페이지가 로드되고 나서 입력 필드에 포커스를 설정
    if (yellowBoxRef.current) {
      yellowBoxRef.current.focus();
    }
  }, []);

  function handleBackBtn() {
    moveToOnboardingCustom();
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleOnboardingBtn() {
    setNickname(nickname); // 닉네임을 Recoil 상태에 저장
    moveToOnboardingBirth();
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={2} />
      <ContentsContainer>
        <OnboardingTitleBox titleText="닉네임을 지정해주세요" subtitleText="러비에서 쓰일 애칭이에요" />
        <ProfileIcon as={myProfile} />
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
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
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
