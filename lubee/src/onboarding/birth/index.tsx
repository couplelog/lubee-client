import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import TitleBox from "../components/TitleBox";
import OnboardingBtn from "../components/OnboardingBtn";
import DatePickerScroll from "../components/rolldate/DatePickerScroll";

export default function index() {
  const navigate = useNavigate();
  const [birthday, setBirthday] = useState("");

  const isOnboardingBtnDisabled = birthday === "";

  function handleBackBtn() {
    navigate("/onboarding/profile");
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleOnboardingBtn() {
    navigate("/onboarding/anniversary");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={2} />
      <TitleBox titleText="본인의 생년월일을 입력해주세요" subtitleText="달력에 나와 연인의 생일이 표시돼요" />
      <DatePickerScroll />
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
