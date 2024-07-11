import styled from "styled-components";
import { HoneyIc } from "@assets/index";

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
  align-items: flex-start;
`;

const HoneyIcon = styled(HoneyIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
