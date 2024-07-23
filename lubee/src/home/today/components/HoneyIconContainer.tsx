import styled from "styled-components";
import { HoneyIc } from "@assets/index";
import { useGetTodayHoney } from "home/hooks/useGetTodayHoney";

export default function HoneyIconContainer() {
  return (
    <Container>
      <HoneyIcon />
      <HoneyIcon />
      <HoneyIcon />
      <HoneyIcon />
      <HoneyIcon />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  padding-top: 5.6rem;
`;

const HoneyIcon = styled(HoneyIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
