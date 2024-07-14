import styled from "styled-components";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";

export default function ProfileBox() {
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");

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
  z-index: 1;
  width: 8rem;
  height: 8rem;
`;
