import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import {
  Profile1Ic,
  Profile2Ic,
  Profile3Ic,
  Profile4Ic,
  Profile5Ic,
  Profile6Ic,
  ProfileStroke1Ic,
  ProfileStroke2Ic,
  ProfileStroke3Ic,
  ProfileStroke4Ic,
  ProfileStroke5Ic,
  ProfileStroke6Ic,
} from "@assets/index";

export default function index() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/onboarding");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} showBackIcon showTitle />
      <ProfileGrid>
        <ProfileIcon as={Profile1Ic} />
        <ProfileIcon as={Profile2Ic} />
        <ProfileIcon as={Profile3Ic} />
        <ProfileIcon as={Profile4Ic} />
        <ProfileIcon as={Profile5Ic} />
        <ProfileIcon as={Profile6Ic} />
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

const ProfileIcon = styled.svg`
  width: 14.4rem;
  height: 14.4rem;
`;
