import { useState, useEffect } from "react";
import {
  YellowHeartIcon,
  YellowHoneyIcon,
  YellowSmileIcon,
  YellowBangIcon,
  YellowThumIcon,
} from "@styles/@common/commonEmoji";
import styled from "styled-components";

export default function EmojiBar() {
  const [emoji, setEmoji] = useState<string>(() => {
    return localStorage.getItem("emoji") || "";
  });

  useEffect(() => {
    localStorage.setItem("emoji", emoji);
  }, [emoji]);

  function toggleEmoji(newEmoji: string) {
    setEmoji((prevEmoji) => (prevEmoji === newEmoji ? "" : newEmoji));
  }

  function handleHeart() {
    toggleEmoji("heart");
  }
  function handleHoney() {
    toggleEmoji("honey");
  }
  function handleThumb() {
    toggleEmoji("thumb");
  }
  function handleBang() {
    toggleEmoji("bang");
  }
  function handleSmile() {
    toggleEmoji("smile");
  }

  return (
    <Container>
      <Heart type="button" onClick={handleHeart} $emoji={emoji}>
        <YellowHeartIcon />
      </Heart>
      <Honey type="button" onClick={handleHoney} $emoji={emoji}>
        <YellowHoneyIcon />
      </Honey>
      <Thumb type="button" onClick={handleThumb} $emoji={emoji}>
        <YellowThumIcon />
      </Thumb>
      <Bang type="button" onClick={handleBang} $emoji={emoji}>
        <YellowBangIcon />
      </Bang>
      <Smile type="button" onClick={handleSmile} $emoji={emoji}>
        <YellowSmileIcon />
      </Smile>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.78rem 1.9rem;
  border-radius: 90.024px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Heart = styled.button<{ $emoji: string }>`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
  background-color: ${({ theme, $emoji }) => ($emoji === "heart" ? theme.colors.yellow_50 : theme.colors.white)};
`;

const Honey = styled.button<{ $emoji: string }>`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
  background-color: ${({ theme, $emoji }) => ($emoji === "honey" ? theme.colors.yellow_50 : theme.colors.white)};
`;

const Thumb = styled.button<{ $emoji: string }>`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
  background-color: ${({ theme, $emoji }) => ($emoji === "thumb" ? theme.colors.yellow_50 : theme.colors.white)};
`;

const Bang = styled.button<{ $emoji: string }>`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
  background-color: ${({ theme, $emoji }) => ($emoji === "bang" ? theme.colors.yellow_50 : theme.colors.white)};
`;

const Smile = styled.button<{ $emoji: string }>`
  display: flex;
  align-items: center;
  padding: 0 0.78rem;
  border-radius: 158.268px;
  background-color: ${({ theme, $emoji }) => ($emoji === "smile" ? theme.colors.yellow_50 : theme.colors.white)};
`;
