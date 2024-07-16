import styled from "styled-components";
import MypageFooter from "./components/MypageFooter";

export default function index() {
  return (
    <Container>
      <MypageFooter />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;
