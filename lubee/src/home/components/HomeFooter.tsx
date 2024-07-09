import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExploreDeactivateIc, HomeActivateIc, HomeDeactivateIc, MyActivateIc, MyDeactivateIc } from "@assets/index";

export default function HomeFooter() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<string>(() => {
    return localStorage.getItem("homeFooter") || "today";
  });

  useEffect(() => {
    localStorage.setItem("homeFooter", currentPage);
  }, [currentPage]);

  function moveToMypage() {
    navigate("/month");
    setCurrentPage("mypage");
  }

  function moveToHome() {
    navigate("/month");
    setCurrentPage("today");
  }

  return (
    <Container>
      <HomeBtn type="button" onClick={moveToHome}>
        {currentPage === "today" ? <HomeActivateIc /> : <HomeDeactivateIc />}
        <HomeText $currentPage={currentPage}>홈</HomeText>
      </HomeBtn>
      <ExploreBtn type="button">
        <ExploreDeactivateIc />
        <Text>탐색</Text>
      </ExploreBtn>
      <MypageBtn type="button" onClick={moveToMypage}>
        {currentPage === "mypage" ? <MyActivateIc /> : <MyDeactivateIc />}
        <MypageText $currentPage={currentPage}>마이</MypageText>
      </MypageBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 6.75rem;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 1.1rem 9.4rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HomeBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
`;

const HomeText = styled.p<{ $currentPage: string }>`
  ${({ theme }) => theme.fonts.Caption_0};

  color: ${({ theme, $currentPage }) => ($currentPage === "today" ? theme.colors.gray_600 : theme.colors.gray_200)};
`;

const MypageText = styled.p<{ $currentPage: string }>`
  ${({ theme }) => theme.fonts.Caption_0};

  color: ${({ theme, $currentPage }) => ($currentPage === "mypage" ? theme.colors.gray_600 : theme.colors.gray_200)};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Caption_0};

  color: ${({ theme }) => theme.colors.gray_200};
`;

const ExploreBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
`;

const MypageBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
`;
