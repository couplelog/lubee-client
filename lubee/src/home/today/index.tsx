import styled from "styled-components";
import DateBox from "./components/DateBox";
import TodayTitle from "./components/TodayTitle";
import HoneyIconContainer from "./components/HoneyIconContainer";
import ProfileBox from "./components/ProfileBox";
import ContentContainer from "./components/ContentContainer";
import { BtnWrapper } from "@styles/btnStyle";
import { PlusIc } from "@assets/index";

export default function index() {
  return (
    <Wrapper>
      <Container>
        <DateBox />
        <TodayTitle day={387} />
        <SubContainer>
          <HoneyIconContainer />
          <ProfileBox />
        </SubContainer>
      </Container>
      <ContentContainer />
      <BtnWrapper type="button">
        <PlusIcon />
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SubContainer = styled.section`
  display: flex;
  gap: 4rem;
  margin-top: -0.8rem;
`;

const PlusIcon = styled(PlusIc)`
  position: fixed;
  right: 1.8rem;
  bottom: 7.5rem;
  width: 6.4rem;
  height: 6.4rem;
`;
