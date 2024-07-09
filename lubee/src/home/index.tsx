import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import { Outlet } from "react-router-dom";
import HomeFooter from "./components/HomeFooter";

export default function index() {
  return (
    <Container>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
