import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomeHeader() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<string>(() => {
    return localStorage.getItem("currentPage") || "today";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  function moveToHomeToday() {
    navigate("/today");
    setCurrentPage("today");
  }

  function moveToHomeMonth() {
    navigate("/month");
    setCurrentPage("month");
  }

  return (
    <Container>
      <Today type="button" onClick={moveToHomeToday} $currentPage={currentPage}>
        오늘
      </Today>
      <Month type="button" onClick={moveToHomeMonth} $currentPage={currentPage}>
        월간
      </Month>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.3rem 0 2.3rem;
`;

const Today = styled.button<{ $currentPage: string }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 32px;
  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme, $currentPage }) =>
    $currentPage === "today" ? theme.colors.gray_600 : theme.colors.gray_50};
  color: ${({ theme, $currentPage }) => ($currentPage === "today" ? theme.colors.white : theme.colors.gray_800)};
`;

const Month = styled.button<{ $currentPage: string }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 32px;
  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme, $currentPage }) =>
    $currentPage === "month" ? theme.colors.gray_600 : theme.colors.gray_50};
  color: ${({ theme, $currentPage }) => ($currentPage === "month" ? theme.colors.white : theme.colors.gray_800)};
`;
