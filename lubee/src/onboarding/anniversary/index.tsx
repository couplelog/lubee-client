import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import ProgressBar from "../components/ProgressBar";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import YellowBox from "../components/YellowBox";
import OnboardingBtn from "../components/OnboardingBtn";

interface AnnivProps {
  moveToOnboardingBirth: () => void;
}

export default function index(props: AnnivProps) {
  const { moveToOnboardingBirth } = props;
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const isOnboardingBtnDisabled = !(year && month && day);

  // 오늘보다 미래 선택 시 오늘 날짜로 변경
  useEffect(() => {
    if (year.length === 4 && month.length === 2 && day.length === 2) {
      const inputDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();

      if (inputDate > today) {
        const todayStr = today.toISOString().split("T")[0].split("-");
        setYear(todayStr[0]);
        setMonth(todayStr[1]);
        setDay(todayStr[2]);
      }
    }
  }, [year, month, day]);

  // 한자리 수 입력 시 0 붙이기
  useEffect(() => {
    if (month.length === 1 && month !== "0") {
      setMonth(`0${month}`);
    }
  }, [month]);

  useEffect(() => {
    if (day.length === 1 && day !== "0") {
      setDay(`0${day}`);
    }
  }, [day]);

  function handleBackBtn() {
    moveToOnboardingBirth();
  }

  function handleXBtn() {
    navigate("/login");
  }

  function handleOnboardingBtn() {
    navigate("/congrats/join");
  }

  // 월은 01~12로
  function handleMonthChange(value: string) {
    if (value === "" || (value.length <= 2 && (parseInt(value) >= 1 || value === "0"))) {
      setMonth(value);
    }
  }

  // 일은 01~31로
  function handleDayChange(value: string) {
    if (value === "" || (value.length <= 2 && (parseInt(value) >= 1 || value === "0"))) {
      setDay(value);
    }
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} handleXBtn={handleXBtn} showBackIcon showXIcon />
      <ProgressBar step={4} />
      <OnboardingTitleBox
        titleText="연인과 처음 만난 날을 입력해주세요"
        subtitleText="나와 연인의 기념일을 알 수 있어요"
      />
      <YellowBoxContainer>
        <YellowBox inputValue={year} setInputValue={setYear} $disabled={true} placeholder="YYYY" />
        <YellowBox inputValue={month} setInputValue={handleMonthChange} $disabled={true} placeholder="MM" />
        <YellowBox inputValue={day} setInputValue={handleDayChange} $disabled={true} placeholder="DD" />
      </YellowBoxContainer>
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
`;

const YellowBoxContainer = styled.section`
  display: flex;
  gap: 1.2rem;
  margin-top: 6rem;
`;
