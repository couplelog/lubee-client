import styled from "styled-components";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

export default function TodayProfileBox() {
  const { data: CoupleInfo } = useGetCouplesInfo();
  if (!CoupleInfo) return <></>;

  const {
    response: { profile_first, profile_second },
  } = CoupleInfo;

  const myProfile = getProfileIconSrc("me", profile_first);
  const partnerProfile = getProfileIconSrc("partner", profile_second);

  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileIcon as={myProfile} />
        <OtherProfileIcon as={partnerProfile} />
      </ProfileContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 149px;
  height: 80px;
`;

const ProfileIcon = styled.svg`
  position: absolute;
  width: 8rem;
  height: 8rem;
`;

const OtherProfileIcon = styled.svg`
  position: absolute;
  right: 0;
  width: 8rem;
  height: 8rem;
`;
