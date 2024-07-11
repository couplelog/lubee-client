import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExploreDeactivateIc, HomeActivateIc, MyDeactivateIc } from "@assets/index";

export default function HomeFooter() {
  const navigate = useNavigate();
  const [footerPage, setFooterPage] = useState<string>(() => {
    return localStorage.getItem("home-footer") || "today";
  });

  useEffect(() => {
    localStorage.getItem("currentPage");
  }, []);

  useEffect(() => {
    localStorage.setItem("home-footer", footerPage);
  }, []);

  function moveToMypage() {
    navigate("/mypage");
  }

  function moveToHome() {
    // 헤더에서 전에 어떤 페이지였는지 불러오기
    const prevPage = localStorage.getItem("currentPage");

    if (prevPage === "today") {
      setFooterPage("today");
      navigate("/home/today");
    } else {
      setFooterPage("month");
      navigate("/home/month");
    }
  }

  return (
    <Container>
      <BtnWrapper type="button" onClick={moveToHome}>
        <HomeActiveIcon />
        <ActivateText>홈</ActivateText>
      </BtnWrapper>
      <BtnWrapper type="button">
        <ExploreDeactivateIcon />
        <DeactivateText>탐색</DeactivateText>
      </BtnWrapper>
      <BtnWrapper type="button" onClick={moveToMypage}>
        <MyDeactivateIcon />
        <DeactivateText>마이</DeactivateText>
      </BtnWrapper>
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

const DeactivateText = styled.p`
  ${({ theme }) => theme.fonts.Caption_0};

  color: ${({ theme }) => theme.colors.gray_200};
`;

const ActivateText = styled.p`
  ${({ theme }) => theme.fonts.Caption_0};

  color: ${({ theme }) => theme.colors.gray_600};
`;

const BtnWrapper = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
`;

const MyDeactivateIcon = styled(MyDeactivateIc)`
  width: 3rem;
  height: 3rem;
`;

const HomeActiveIcon = styled(HomeActivateIc)`
  width: 3rem;
  height: 3rem;
`;

const ExploreDeactivateIcon = styled(ExploreDeactivateIc)`
  width: 3rem;
  height: 3rem;
`;
