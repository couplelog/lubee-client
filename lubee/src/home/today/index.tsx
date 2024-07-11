import styled from "styled-components";
import DateBox from "./components/DateBox";
import Title from "./components/Title";
import HoneyIconContainer from "./components/HoneyIconContainer";
import ProfileBox from "./components/ProfileBox";
import ContentContainer from "../components/ContentContainer";
import { imagesData } from "@common/core/imagesData";
import { ProfileIc } from "@assets/index";

export default function index() {
  return (
    <Wrapper>
      <Container>
        <DateBox />
        <Title />
        <HoneyIconContainer />
        <ProfileBox />
      </Container>
      <ContentContainer iconSrc={ProfileIc} imagesData={imagesData} />
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

const Container = styled.section`
  width: auto;
  height: 18.4rem;
  display: inline-flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: -0.8rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
