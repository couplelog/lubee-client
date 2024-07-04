import styled from "styled-components";
import { LogoIc } from "@assets/index";
import Location from "@components/@common/Location";
import EmojiBar from "@components/@common/EmojiBar";

export default function OnboardingPage() {
  return (
    <>
      <LogoIcon />
      <Location location={"엽기떡볶이"} />
      <EmojiBar />
    </>
  );
}

const LogoIcon = styled(LogoIc)`
  width: 15rem;
  height: 3.9rem;
`;
