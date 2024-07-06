import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoGrayIc, SymbolIc } from "@assets/index";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Login");
    }, 3000); // 3초 후에 로그인 페이지로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <Wrapper>
      <LogoContainer>
        <SymbolIcon />
        <LogoIcon />
      </LogoContainer>
      <Footer>
        <CompanyText>(C) COUPLE-LOGUE</CompanyText>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  margin: 27.8rem 0 36.792rem;
`;

const SymbolIcon = styled(SymbolIc)`
  width: 4.6rem;
  height: 4.6rem;
`;

const LogoIcon = styled(LogoGrayIc)`
  width: 15rem;
  height: 3.9rem;
`;

const Footer = styled.div`
  display: flex;
  padding-bottom: 1.4rem;
`;

const CompanyText = styled.p`
  ${({ theme }) => theme.fonts.SignBtnText};
`;
