import React, { useEffect, useState } from "react";
import styled from "styled-components";
import YellowBox from "../YellowBox";
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

const DatePickerScroll: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState({ year: "", month: "", day: "" });

  useEffect(() => {
    // Rolldate 초기화
    const Rolldate = window.Rolldate;
    if (Rolldate) {
      new Rolldate({
        el: "#hiddenDatePicker",
        format: "YYYY-MM-DD", // 연도, 월, 일 선택할 수 있도록 설정
        minStep: 1,
        beginYear: 1950,
        endYear: 2024,
        trigger: "tap",
        lang: {
          title: "Select Date", // 선택기 제목
          cancel: "Cancel", // 취소 버튼 텍스트
          confirm: "Confirm", // 확인 버튼 텍스트
        },
        value: "2024-07-09", // 기본 날짜 설정
        confirm: (date: string) => {
          const [year, month, day] = date.split("-");
          setSelectedDate({ year, month, day });
        },
      });
    } else {
      console.error("Rolldate is not loaded");
    }
  }, []);

  const handleClick = () => {
    // 강제로 hidden input 클릭 이벤트 발생
    document.getElementById("hiddenDatePicker")?.click();
  };

  return (
    <Wrapper onClick={handleClick}>
      <HiddenInput type="text" id="hiddenDatePicker" readOnly />
      <StyledDate>{selectedDate.year || "year"}</StyledDate>
      <StyledDate>{selectedDate.month || "month"}</StyledDate>
      <StyledDate>{selectedDate.day || "day"}</StyledDate>
    </Wrapper>
  );
};

export default DatePickerScroll;

const Wrapper = styled.section`
  display: flex;
  gap: 1.2rem;
  margin-top: 6rem;
  cursor: pointer; /* 클릭 가능하게 표시 */
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledDate = styled.div`
  ${flexCenter}

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;

  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme }) => theme.colors.yellow_600};
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.yellow_300};
  }
`;
