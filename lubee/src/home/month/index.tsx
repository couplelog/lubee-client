import CalContainer from "./components/CalContainer";
import styled from "styled-components";
import { CAL } from "@common/core/calendarData";
import { getTodayMonth, getTodayYear } from "@common/utils/dateFormat";
import { useEffect, useRef } from "react";
import MonthHomeHeader from "./components/MonthHomeHeader";

export default function index() {
  /*이번 달 상단에 위치시키는 ref*/
  const containerRef = useRef<HTMLDivElement | null>(null);
  const calendarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentMonthIdx = CAL.findIndex((cal) => cal.year === getTodayYear && cal.month === getTodayMonth);
    if (currentMonthIdx !== -1 && calendarRefs.current[currentMonthIdx]) {
      calendarRefs.current[currentMonthIdx]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [getTodayYear, getTodayMonth]);

  return (
    <>
      <MonthHomeHeader />
      <CalWrapper ref={containerRef}>
        {CAL.map((cal, idx) => (
          <div key={idx} ref={(el) => (calendarRefs.current[idx] = el)}>
            <CalContainer info={cal} isTodayCalendar={false} />
          </div>
        ))}
      </CalWrapper>
    </>
  );
}

const CalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  overflow: scroll;
  scrollbar-width: none;
  width: 100%;
  padding: 0 1.8rem 2rem;
`;
