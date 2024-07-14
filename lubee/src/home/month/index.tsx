import CalContainer from "./components/CalContainer";
import styled from "styled-components";
import { CAL } from "@common/core/calendarData";

const index = () => {
  // start : 금요일부터 1일이 시작되는 달
  // length : 총 31일인 달
  // holiday : 휴일(빨간날)인 날
  // data : 항공편 정보가 있는 날

  return (
    <CalWrapper>
      {CAL.map((cal, idx) => {
        return <CalContainer key={idx} info={cal} />;
      })}
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
  padding: 0 1.8rem;
`;
