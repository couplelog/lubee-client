import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Profile1Ic } from "@assets/index";
import Header from "@components/onboarding/Header";
import ProgressBar from "@components/onboarding/ProgressBar";

export default function OnboardingNamePage() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/Onboarding");
  }

  return (
    <Wrapper>
      <Header handleBackBtn={handleBackBtn} showBackIcon showTitle />
      <ProgressBar step={2} />
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
