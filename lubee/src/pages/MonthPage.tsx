import HomeHeader from "@components/@common/HomeHeader";
import Calendar from "@components/month/Calendar";
import styled from "styled-components";

export default function MonthPage() {
  return (
    <Container>
      <HomeHeader />
      <Calendar />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
`;
