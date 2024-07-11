import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProfileIcons from "@common/components/ProfileIcons";

export default function index() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);

  function handleBackBtn() {
    navigate("/onboarding/profile", { state: { selectedProfile } });
  }

  function handleProfileClick(profileIndex: any) {
    setSelectedProfile(profileIndex);
    localStorage.setItem("selectedProfile", profileIndex.toString()); // 로컬 스토리지에 저장
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} showBackIcon showTitle />
      <ProfileGrid>
        {ProfileIcons.map((profile, index) => (
          <BtnWrapper key={index} onClick={() => handleProfileClick(index)}>
            <ProfileIcon as={selectedProfile === index ? profile.selected : profile.default} />
          </BtnWrapper>
        ))}
      </ProfileGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const ProfileGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 3.6rem;
  justify-items: center;
`;

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const ProfileIcon = styled.svg`
  width: 14.4rem;
  height: 14.4rem;
`;
