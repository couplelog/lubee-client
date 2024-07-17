import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import ProgressBar from "../components/ProgressBar";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import OnboardingBtn from "../components/OnboardingBtn";
import DateInput from "../components/DateInput";

interface BirthProps {
  moveToOnboardingProfile: () => void;
  moveToOnboardingAnniv: () => void;
}

export default function index(props: BirthProps) {
  const { moveToOnboardingProfile, moveToOnboardingAnniv } = props;
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const isOnboardingBtnDisabled = !(year && month && day);

  function handleBackBtn() {
    moveToOnboardingProfile();
  }

  function handleXBtn() {
    navigate("/login");
  }

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
      <DateInput year={year} setYear={setYear} month={month} setMonth={setMonth} day={day} setDay={setDay} />
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
