import styled from "styled-components";
import { Outlet } from "react-router-dom";
import HomeFooter from "home/components/HomeFooter";

export default function index() {
  return (
    <Container>
      <Outlet />
      <HomeFooter />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;
