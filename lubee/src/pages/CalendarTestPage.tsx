import CalContainer from "@components/month/CalContainer";
import styled from "styled-components";
import { CAL } from "@core/constant";
import HomeHeader from "@components/@common/HomeHeader";
import HomeFooter from "@components/@common/HomeFooter";

export interface calInfo {
  year: number;
  month: number;
  start: number;
  length: number;
  holiday: number[];
  data: {
    date: number;
  }[];
}

const CalendarTestPage = () => {
  // start : 금요일부터 1일이 시작되는 달
  // length : 총 31일인 달
  // holiday : 휴일(빨간날)인 날
  // data : 항공편 정보가 있는 날

  return (
    <Container>
      <HomeHeader />
      <CalWrapper>
        {CAL.map((cal, idx) => {
          return <CalContainer key={idx} info={cal} />;
        })}
      </CalWrapper>
      <HomeFooter />
    </Container>
  );
};

export default CalendarTestPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const CalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  overflow: scroll;
  scrollbar-width: none;
  width: 100%;
`;
