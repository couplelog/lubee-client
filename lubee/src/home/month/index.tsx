import CalContainer from "./components/CalContainer";
import styled from "styled-components";
import { CAL } from "@common/core/calendarData";
import { getTodayMonth, getTodayYear } from "@common/utils/dateFormat";
import { useEffect, useRef } from "react";

const index = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const calendarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentMonthIndex = CAL.findIndex((cal) => cal.year === getTodayYear && cal.month === getTodayMonth);
    if (currentMonthIndex !== -1 && calendarRefs.current[currentMonthIndex]) {
      calendarRefs.current[currentMonthIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [getTodayYear, getTodayMonth]);

  return (
    <CalWrapper ref={containerRef}>
      {CAL.map((cal, idx) => (
        <div key={idx} ref={(el) => (calendarRefs.current[idx] = el)}>
          <CalContainer info={cal} />
        </div>
      ))}
    </CalWrapper>
  );
};

export default index;

const CalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  overflow: scroll;
  scrollbar-width: none;
  width: 100%;
  padding: 0 1.8rem 2rem;
`;
