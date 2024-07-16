import styled from "styled-components";
import MypageFooter from "./components/MypageFooter";
import { SettingIc, EditIc, PlayIc, HoneyYellowIc } from "@assets/index";
import HoneyBox from "./components/HoneyBox";
import Banner from "./components/Banner";

export default function index() {
  return (
    <Wrapper>
      <SettingIcon />
      <TopContainer>
        <HoneyBox count={25} />
        <Banner />
      </TopContainer>
      <MypageFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const TopContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  position: relative;
  width: 35rem;
`;

const SettingIcon = styled(SettingIc)`
  width: 2.4rem;
  height: 2.4rem;
  margin: 2rem 0 1.2rem;
`;
