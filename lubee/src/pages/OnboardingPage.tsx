import styled from "styled-components";
import { LogoIc } from "@assets/index";

export default function OnboardingPage() {
  return (
    <>
      <LogoIcon />
    </>
  );
}

const LogoIcon = styled(LogoIc)`
  width: 15rem;
  height: 3.9rem;
`;
