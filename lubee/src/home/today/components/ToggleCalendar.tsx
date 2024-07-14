import styled from "styled-components";
import { useState } from "react";
import { CAL } from "@common/core/calendarData";
import CalContainer from "home/month/components/CalContainer";
import { BtnWrapper } from "@styles/btnStyle";
import { BackSmallIc, ForwardIc } from "@assets/index";

interface ToggleCalendarProps {
  showCalendar: boolean;
  handleCalendar: () => void;
}

export default function ToggleCalendar({ showCalendar, handleCalendar }: ToggleCalendarProps) {
  const [currentCalendarIndex, setCurrentCalendarIndex] = useState(0);

  const handleBackBtn = () => {
    setCurrentCalendarIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : CAL.length - 1));
  };

  const handleForwardBtn = () => {
    setCurrentCalendarIndex((prevIndex) => (prevIndex < CAL.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Background show={showCalendar}>
      {showCalendar && (
        <CalendarContainer>
          <Calendar>
            <CalContainer info={CAL[currentCalendarIndex]} showCalendar={showCalendar} />
          </Calendar>
          <BackForthBtn>
            <BtnWrapper type="button" onClick={handleBackBtn}>
              <BackSmallIcon />
            </BtnWrapper>
            <BtnWrapper type="button" onClick={handleForwardBtn}>
              <ForwardIcon />
            </BtnWrapper>
          </BackForthBtn>
          <CancelBtn type="button" onClick={handleCalendar}>
            취소
          </CancelBtn>
        </CalendarContainer>
      )}
    </Background>
  );
}

const Background = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const CalendarContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;

  /* max-width: 800px; */
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  transform: translateX(-50%);
`;

const Calendar = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  /* max-height: 42vh; */

  /* padding: 1rem; */
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  overflow-x: auto;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.7rem 1.3rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  ${({ theme }) => theme.fonts.Title_1};

  color: ${({ theme }) => theme.colors.gray_800};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`;

const BackForthBtn = styled.div`
  display: flex;
  gap: 1.71rem;
  position: absolute;
  top: 4rem;
  right: 3.5rem;
  z-index: 1;
`;

const BackSmallIcon = styled(BackSmallIc)`
  width: 1.4716rem;
  height: 1.4716rem;
`;

const ForwardIcon = styled(ForwardIc)`
  width: 1.4716rem;
  height: 1.4716rem;
`;
