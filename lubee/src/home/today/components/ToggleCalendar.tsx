import styled from "styled-components";
import { CAL } from "@common/core/calendarData";
import CalContainer from "home/month/components/CalContainer";

interface ToggleCalendarProps {
  showCalendar: boolean;
  handleCalendar: () => void;
}

export default function ToggleCalendar({ showCalendar, handleCalendar }: ToggleCalendarProps) {
  return (
    <Background show={showCalendar}>
      {showCalendar && (
        <CalendarContainer>
          <Calendar>
            {CAL.map((cal, idx) => (
              <CalContainer key={idx} info={cal} />
            ))}
          </Calendar>
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
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  transform: translateX(-50%);
`;

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-height: 42vh;
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  overflow-y: auto;
  scrollbar-width: none;
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
