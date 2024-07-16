import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import { Outlet } from "react-router-dom";
import HomeFooter from "home/components/HomeFooter";

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
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;
