import styled from "styled-components";
import { useState } from "react";
import { CAL } from "@common/core/calendarData";
import CalContainer from "home/month/components/CalContainer";
import { BtnWrapper } from "@styles/btnStyle";
import { BackSmallIc, ForwardIc } from "assets/index";
import { getTodayMonth, getTodayYear } from "@common/utils/dateFormat";

interface ToggleCalendarProps {
  showCalendar: boolean;
  handleCalendar: () => void;
}

export default function ToggleCalendar({ showCalendar, handleCalendar }: ToggleCalendarProps) {
  const initialIndex = CAL.findIndex((cal) => cal.year === getTodayYear && cal.month === getTodayMonth);
  const [currentCalendarIndex, setCurrentCalendarIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const [openDateDetailModal, setOpenDateDetailModal] = useState(false);

  const handleBackBtn = () => {
    setCurrentCalendarIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : CAL.length - 1));
  };

  const handleForwardBtn = () => {
    setCurrentCalendarIndex((prevIndex) => (prevIndex < CAL.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Background>
      {showCalendar && (
        <CalendarContainer>
          <Calendar>
            <CalContainer
              info={CAL[currentCalendarIndex]}
              showCalendar={showCalendar}
              setOpenDateDetailModal={setOpenDateDetailModal}
            />
          </Calendar>
          <CancelBtn type="button" onClick={handleCalendar}>
            취소
          </CancelBtn>
          {/* 모달이 열려있을 때 < > 버튼 사라지게 */}
          {!openDateDetailModal && (
            <BackForthBtn $showCalendar={showCalendar}>
              <BtnWrapper type="button" onClick={handleBackBtn}>
                <BackSmallIcon />
              </BtnWrapper>
              <BtnWrapper type="button" onClick={handleForwardBtn}>
                <ForwardIcon />
              </BtnWrapper>
            </BackForthBtn>
          )}
        </CalendarContainer>
      )}
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const CalendarContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
`;

const Calendar = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
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

const BackForthBtn = styled.div<{ $showCalendar: boolean }>`
  display: flex;
  gap: 1.71rem;
  position: absolute;
  top: 3.5rem;
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
