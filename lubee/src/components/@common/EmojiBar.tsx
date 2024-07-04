import {
  YellowHeartIcon,
  YellowHoneyIcon,
  YellowSmileIcon,
  YellowBangIcon,
  YellowThumIcon,
} from "@styles/@common/commonEmoji";
import styled from "styled-components";

export default function EmojiBar() {
  return (
    <Container>
      <Heart>
        <YellowHeartIcon />
      </Heart>
      <Honey>
        <YellowHoneyIcon />
      </Honey>
      <Thumb>
        <YellowThumIcon />
      </Thumb>
      <Bang>
        <YellowBangIcon />
      </Bang>
      <Smile>
        <YellowSmileIcon />
      </Smile>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90.024px;
`;

const Heart = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
`;

const Honey = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
`;

const Thumb = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
`;

const Bang = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
`;

const Smile = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
`;
