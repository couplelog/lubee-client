import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
