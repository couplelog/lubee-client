import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import TitleBox from "../components/TitleBox";
import DatePickerScroll from "../components/rolldate/DatePickerScroll";
import OnboardingBtn from "../components/OnboardingBtn";

interface AnnivProps {
  moveToOnboardingBirth: () => void;
  moveToOnboardingComplete: () => void;
}

export default function index(props: AnnivProps) {
  const { moveToOnboardingBirth, moveToOnboardingComplete } = props;
  const navigate = useNavigate();
  const [anniv, setAnniv] = useState("");

  const isOnboardingBtnDisabled = anniv === "";

  function handleBackBtn() {
    moveToOnboardingBirth();
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleDateChange(date: string) {
    setAnniv(date);
  }
  function handleOnboardingBtn() {
    moveToOnboardingComplete();
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={4} />
      <TitleBox titleText="연인과 처음 만난 날을 입력해주세요" subtitleText="나와 연인의 기념일을 알 수 있어요" />
      <DatePickerScroll onDateChange={handleDateChange} />
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="완료" $disabled={isOnboardingBtnDisabled} />
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
