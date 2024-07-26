import styled from "styled-components";
import MypageFooter from "./components/MypageFooter";
import { SettingIc } from "@assets/index";
import MypageProfileBox from "./components/MypageProfileBox";
import HoneyBox from "./components/HoneyBox";
import Banner from "./components/Banner";
import TabBar from "./components/TabBar";
import { useGetTotalHoney } from "./hooks/useGetTotalHoney";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

export default function index() {
  const totalHoney = useGetTotalHoney();
  if (!totalHoney) return <></>;

  const { response } = totalHoney;

  /*커플정보에서 프로필 가져와서 출력*/
  const CoupleInfo = useGetCouplesInfo();
  if (!CoupleInfo) return <></>;

  const {
    response: { nickname_first, profile_first, nickname_second, profile_second, birthday_first, birthday_second },
  } = CoupleInfo;

  const myProfile = getProfileIconSrc("me", profile_first);
  const partnerProfile = getProfileIconSrc("partner", profile_second);

  return (
    <Wrapper>
      <MypageContainer>
        <SettingIcon />
        <TopContainer>
          <MypageProfileBox
            myName={nickname_first}
            myBirth={birthday_first}
            myProfile={myProfile}
            partnerName={nickname_second}
            partnerBirth={birthday_second}
            partnerProfile={partnerProfile}
          />
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
