import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flexCenter } from "@styles/globalStyle";

// Rolldate 인터페이스 정의
interface RolldateOptions {
  el: string;
  format: string;
  minStep: number;
  beginYear: number;
  endYear: number;
  trigger: string;
  lang: {
    title: string;
    cancel: string;
    confirm: string;
  };
  value: string;
  confirm?: (date: string) => void;
}

// window 객체에 Rolldate를 추가
declare global {
  interface Window {
    Rolldate: new (options: RolldateOptions) => void;
  }
}

interface DatePickerScrollProps {
  onDateChange: (date: string) => void;
}

const DatePickerScroll: React.FC<DatePickerScrollProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState({ year: "", month: "", day: "" });

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return { year, month, day };
  }

  function handleClick() {
    // 강제로 hidden input 클릭 이벤트 발생
    document.getElementById("hiddenDatePicker")?.click();
  }

  useEffect(() => {
    // Rolldate 초기화
    const Rolldate = window.Rolldate;
    if (Rolldate) {
      const currentDate = getCurrentDate();

      new Rolldate({
        el: "#hiddenDatePicker",
        format: "YYYY-MM-DD", // 연도, 월, 일 선택할 수 있도록 설정
        minStep: 1,
        beginYear: 1950,
        endYear: 2024,
        trigger: "click",
        lang: {
          title: "", // 선택기 제목
          cancel: "", // 취소 버튼 텍스트
          confirm: "", // 확인 버튼 텍스트
        },
        value: `${currentDate.year}-${currentDate.month}-${currentDate.day}`,
        confirm: (date: string) => {
          const [year, month, day] = date.split("-");
          const selectedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          const today = new Date();

          if (selectedDate > today) {
            // 선택한 날짜가 오늘보다 미래일 경우 오늘 날짜로 설정
            const currentDate = getCurrentDate();
            setSelectedDate(currentDate);
            onDateChange(`${currentDate.year}-${currentDate.month}-${currentDate.day}`);
          } else {
            setSelectedDate({ year, month, day });
            onDateChange(date);
          }
        },
      });
    } else {
      console.error("Rolldate is not loaded");
    }
  }, [selectedDate]);

  return (
    <Wrapper onClick={handleClick}>
      <HiddenInput type="text" id="hiddenDatePicker" readOnly />
      {/* 날짜 선택 안했을 경우 Placeholder로 텍스트 색상 조정 및 오늘 날짜 출력 */}
      <DateBox $isPlaceholder={!selectedDate.year}>{selectedDate.year || getCurrentDate().year}</DateBox>
      <DateBox $isPlaceholder={!selectedDate.month}>{selectedDate.month || getCurrentDate().month}</DateBox>
      <DateBox $isPlaceholder={!selectedDate.day}>{selectedDate.day || getCurrentDate().day}</DateBox>
    </Wrapper>
  );
};

export default DatePickerScroll;

const Wrapper = styled.section`
  display: flex;
  gap: 1.2rem;
  margin-top: 6rem;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const DateBox = styled.div<{ $isPlaceholder: boolean }>`
  ${flexCenter}

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;

  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme, $isPlaceholder }) =>
    $isPlaceholder ? theme.colors.yellow_300 : theme.colors.yellow_600}; /* 날짜 선택 안했을 때 placeholder 색상 */

  cursor: pointer;
`;
