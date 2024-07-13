import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import OnboardingBtn from "onboarding/components/OnboardingBtn";

export default function index() {
  const navigate = useNavigate();

  function handleOnboardingBtn() {
    navigate("/home/today");
  }

  return (
    <Container>
      <Outlet />
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="오늘 홈으로" $disabled={false} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
`;
