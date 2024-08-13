import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MypageFooter from "./components/MypageFooter";
import { SettingIc } from "assets/index";
import MypageProfileBox from "./components/MypageProfileBox";
import HoneyBox from "./components/HoneyBox";
import Banner from "./components/Banner";
import TabBar from "./components/TabBar";
import { useGetTotalHoney } from "./hooks/useGetTotalHoney";
import getHoverProfileIconSrc from "@common/utils/getHoverProfileIconSrc";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";
import { BtnWrapper } from "@styles/btnStyle";

export default function index() {
  const navigate = useNavigate();
  // 훅을 조건문 밖에서 호출
  const totalHoney = useGetTotalHoney();
  const { data: coupleInfo } = useGetCouplesInfo();

  if (!totalHoney || !coupleInfo) return <></>;

  const { response } = totalHoney;
  const { nickname_first, profile_first, nickname_second, profile_second, birthday_first, birthday_second } =
    coupleInfo.response;

  const myProfile = getHoverProfileIconSrc("me", profile_first);
  const partnerProfile = getHoverProfileIconSrc("partner", profile_second);

  return (
    <Wrapper>
      <MypageContainer>
        <BtnWrapper
          type="button"
          onClick={() => {
            navigate("/setting/account");
          }}>
          <SettingIcon />
        </BtnWrapper>
        <TopContainer>
          <MypageProfileBox
            myName={nickname_first}
            myBirth={birthday_first}
            myProfile={myProfile ?? ""}
            partnerName={nickname_second}
            partnerBirth={birthday_second}
            partnerProfile={partnerProfile ?? ""}
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
