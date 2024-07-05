import styled from "styled-components";
import { LogoGrayIc } from "@assets/index";

export default function LandingPage() {
  return (
    <>
      <LogoIcon />
    </>
  );
}

const LogoIcon = styled(LogoGrayIc)`
  width: 15rem;
  height: 3.9rem;
`;
