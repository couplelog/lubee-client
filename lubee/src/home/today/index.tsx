import styled from "styled-components";
import DateBox from "./components/DateBox";
import Title from "./components/Title";
import ProfileBox from "./components/ProfileBox";

export default function index() {
  return (
    <Wrapper>
      <DateBox />
      <Title />
      <ProfileBox />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;
