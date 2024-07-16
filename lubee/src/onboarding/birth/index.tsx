import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import ProgressBar from "../components/ProgressBar";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
// import DatePickerScroll from "../components/rolldate/DatePickerScroll";
import OnboardingBtn from "../components/OnboardingBtn";

interface BirthProps {
  moveToOnboardingProfile: () => void;
  moveToOnboardingAnniv: () => void;
}

export default function index(props: BirthProps) {
  const { moveToOnboardingProfile, moveToOnboardingAnniv } = props;
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState("");

  const isOnboardingBtnDisabled = birthday === "";

  function handleBackBtn() {
    moveToOnboardingProfile();
    console.log(setBirthday);
  }

  function handleXBtn() {
    navigate("/login");
  }

  // function handleDateChange(date: string) {
  //   setBirthday(date);
  // }

  function handleOnboardingBtn() {
    moveToOnboardingAnniv();
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={3} />
      <OnboardingTitleBox
        titleText="본인의 생년월일을 입력해주세요"
        subtitleText="달력에 나와 연인의 생일이 표시돼요"
      />
      {/* <DatePickerScroll onDateChange={handleDateChange} /> */}
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
`;
