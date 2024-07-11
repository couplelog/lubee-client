import { useState, useEffect } from "react";
import styled from "styled-components";
import { OtherProfileIc } from "@assets/index";
import ProfileIcons from "@common/components/ProfileIcons";

export default function ProfileBox() {
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 선택된 프로필을 가져옵니다.
    const savedProfile = localStorage.getItem("selectedProfile");
    if (savedProfile !== null) {
      setSelectedProfile(Number(savedProfile));
    }
  }, []);

  return (
    <Wrapper>
      {selectedProfile !== null && (
        <ProfileContainer>
          <ProfileIcon as={ProfileIcons[selectedProfile].default} />
          <OtherProfileIcon />
        </ProfileContainer>
      )}
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

const OtherProfileIcon = styled(OtherProfileIc)`
  position: absolute;
  width: 8rem;
  height: 8rem;
  z-index: 1;
  right: 0rem;
`;
