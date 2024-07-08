import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function index() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/onboarding");
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
