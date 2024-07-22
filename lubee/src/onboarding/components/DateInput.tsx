import { useEffect, useRef } from "react";
import styled from "styled-components";
import YellowBox from "../components/YellowBox";

interface DateInputProps {
  year: string;
  setYear: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  day: string;
  setDay: (value: string) => void;
}

export default function DateInput(props: DateInputProps) {
  const { year, setYear, month, setMonth, day, setDay } = props;

  const yellowBoxRef = useRef<{ focus: () => void }>(null);

  useEffect(() => {
    // 페이지가 로드되고 나서 입력 필드에 포커스를 설정
    if (yellowBoxRef.current) {
      yellowBoxRef.current.focus();
    }
  }, []);

  const monthTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 한 자리 수 입력 시 0 붙이기
  // 500ms 동안 추가 입력이 없으면 0을 붙이는 방식
  useEffect(() => {
    if (monthTimeoutRef.current) {
      clearTimeout(monthTimeoutRef.current);
    }
    monthTimeoutRef.current = setTimeout(() => {
      if (month.length === 1 && month !== "0") {
        setMonth(`0${month}`);
      }
    }, 500);
  }, [month]);

  useEffect(() => {
    if (dayTimeoutRef.current) {
      clearTimeout(dayTimeoutRef.current);
    }
    dayTimeoutRef.current = setTimeout(() => {
      if (day.length === 1 && day !== "0") {
        setDay(`0${day}`);
      }
    }, 500);
  }, [day]);

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

  function handleYearChange(value: string) {
    if (value === "" || (value.length <= 4 && !isNaN(Number(value)))) {
      setYear(value);
    }
  }

  function handleMonthChange(value: string) {
    if (value === "" || (value.length <= 2 && (parseInt(value) >= 1 || value === "0"))) {
      setMonth(value);
    }
  }

  function handleDayChange(value: string) {
    if (value === "" || (value.length <= 2 && (parseInt(value) >= 1 || value === "0"))) {
      setDay(value);
    }
  }

  return (
    <YellowBoxContainer>
      <YellowBox
        inputValue={year}
        setInputValue={handleYearChange}
        $disabled={true}
        placeholder="YYYY"
        ref={yellowBoxRef}
      />
      <YellowBox inputValue={month} setInputValue={handleMonthChange} $disabled={true} placeholder="MM" />
      <YellowBox inputValue={day} setInputValue={handleDayChange} $disabled={true} placeholder="DD" />
    </YellowBoxContainer>
  );
}

const YellowBoxContainer = styled.section`
  display: flex;
  gap: 1.2rem;
  margin-top: 6rem;
`;
