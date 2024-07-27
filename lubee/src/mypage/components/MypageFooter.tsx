import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExploreDeactivateIc, HomeDeactivateIc, MyActivateIc } from "assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { infoToast } from "@common/utils/toast";

export default function MypageFooter() {
  const navigate = useNavigate();
  const [footerPage, setFooterPage] = useState<string>(() => {
    return localStorage.getItem("mypage-footer") || "today";
  });

  useEffect(() => {
    localStorage.getItem("currentPage");
  }, []);

  useEffect(() => {
    localStorage.setItem("mypage-footer", footerPage);
  }, []);

  function moveToMypage() {
    navigate("/mypage");
    setFooterPage("mypage");
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

  function moveToExplore() {
    infoToast("서비스 준비중입니다");
  }

  return (
    <Container>
      <BtnWrapper type="button" onClick={moveToHome}>
        <HomeDeactivateIcon />
        <DeactivateText>홈</DeactivateText>
      </BtnWrapper>
      <BtnWrapper type="button" onClick={moveToExplore}>
        <ExploreDeactivateIcon />
        <DeactivateText>탐색</DeactivateText>
      </BtnWrapper>
      <BtnWrapper type="button" onClick={moveToMypage}>
        <MyActivateIcon />
        <ActivateText>마이</ActivateText>
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

const ExploreDeactivateIcon = styled(ExploreDeactivateIc)`
  width: 3rem;
  height: 3rem;
`;

const HomeDeactivateIcon = styled(HomeDeactivateIc)`
  width: 3rem;
  height: 3rem;
`;

const MyActivateIcon = styled(MyActivateIc)`
  width: 3rem;
  height: 3rem;
`;
