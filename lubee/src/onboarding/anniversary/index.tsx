import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import ProgressBar from "../components/ProgressBar";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import OnboardingBtn from "../components/OnboardingBtn";
import DateInput from "../components/DateInput";
import { useRecoilState } from "recoil";
import { startDateState } from "@common/recoil/atom";

interface AnnivProps {
  moveToOnboardingBirth: () => void;
}

export default function index(props: AnnivProps) {
  const { moveToOnboardingBirth } = props;
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [_startDate, setStartDate] = useRecoilState(startDateState);

  const isOnboardingBtnDisabled = !(year && month && day);

  function handleBackBtn() {
    moveToOnboardingBirth();
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleOnboardingBtn() {
    // 기념일을 지정된 형식으로 저장
    const formattedAnniv = `${year}.${month}.${day}`;
    setStartDate(formattedAnniv);
    navigate("/congrats/join");
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={4} />
      <OnboardingTitleBox
        titleText="연인과 처음 만난 날을 입력해주세요"
        subtitleText="나와 연인의 기념일을 알 수 있어요"
      />
      <DateInput year={year} setYear={setYear} month={month} setMonth={setMonth} day={day} setDay={setDay} />
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
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
