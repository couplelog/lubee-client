import { useState, useEffect } from "react";
import styled from "styled-components";
import DateBox from "./components/DateBox";
import Title from "./components/Title";
import HoneyIconContainer from "./components/HoneyIconContainer";
import ProfileBox from "./components/ProfileBox";
import Comment from "../month/components/Comment";
import ProfileIcons from "@common/components/ProfileIcons";

export default function index() {
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 선택된 프로필을 가져옵니다.
    const savedProfile = localStorage.getItem("selectedProfile");
    if (savedProfile !== null) {
      setSelectedProfile(Number(savedProfile));
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <DateBox />
        <Title />
        <HoneyIconContainer />
        <ProfileBox />
      </Container>
      {selectedProfile !== null && <Comment iconSrc={ProfileIcons[selectedProfile].default}></Comment>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Container = styled.section`
  width: auto;
  height: 18.4rem;
  display: inline-flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: -0.8rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
