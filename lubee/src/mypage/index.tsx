import styled from "styled-components";
import MypageFooter from "./components/MypageFooter";
import { SettingIc } from "@assets/index";
import MypageProfileBox from "./components/MypageProfileBox";
import HoneyBox from "./components/HoneyBox";
import Banner from "./components/Banner";
import TabBar from "./components/TabBar";
import { useGetTotalHoney } from "./hooks/useGetTotalHoney";

export default function index() {
  const totalHoney = useGetTotalHoney();
  if (!totalHoney) return <></>;

  const { response } = totalHoney;

  return (
    <Wrapper>
      <MypageContainer>
        <SettingIcon />
        <TopContainer>
          <MypageProfileBox myName="불꽃피카츄" myBirth="02.01.18" partnerName="맹꽁이" partnerBirth="99.03.04" />
          <HoneyBox count={response} />
          <Banner />
        </TopContainer>
        <BottomContainer>
          <TabBar />
        </BottomContainer>
      </MypageContainer>
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
  background-color: ${({ theme }) => theme.colors.white};
`;

const MypageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 5.6rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const SettingIcon = styled(SettingIc)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const TopContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  position: relative;
  width: 35rem;
  margin-bottom: 1.6rem;
`;

const BottomContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray_50};
`;
