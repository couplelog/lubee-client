import styled from "styled-components";
import { Profile1Ic, OtherProfileIc } from "@assets/index";

export default function ProfileBox() {
  return (
    <Wrapper>
      <ProfileContainer>
        <ProfileIcon />
        <OtherProfileIcon />
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

const ProfileIcon = styled(Profile1Ic)`
  position: absolute;
  width: 8rem;
  height: 8rem;
`;

const OtherProfileIcon = styled(OtherProfileIc)`
  position: absolute;
  right: 0;
  z-index: 1;
  width: 8rem;
  height: 8rem;
`;
