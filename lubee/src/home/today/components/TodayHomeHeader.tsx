import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TodayHomeHeader() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentPage", "today");
  }, []);

  function moveToHomeToday() {
    navigate("/home/today");
  }

  function moveToHomeMonth() {
    navigate("/home/month");
  }

  return (
    <Container>
      <Today type="button" onClick={moveToHomeToday}>
        오늘
      </Today>
      <Month type="button" onClick={moveToHomeMonth}>
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
  top: 0;
  width: 100%;
  padding: 1.3rem 0 2.3rem;
`;

const Today = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 32px;
  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.gray_600};
  color: ${({ theme }) => theme.colors.white};
`;

const Month = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 32px;
  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.gray_50};
  color: ${({ theme }) => theme.colors.gray_800};
`;
