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
      <SymbolIcon />
      <LogoIcon />
      <CompanyText>(C) COUPLE-LOGUE</CompanyText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const SymbolIcon = styled(SymbolIc)`
  display: flex;
  width: 4.6rem;
  height: 4.6rem;
  margin-top: 27.8rem;
`;

const LogoIcon = styled(LogoGrayIc)`
  display: flex;
  width: 15rem;
  height: 3.9rem;
  margin-top: 1.6rem;
`;

const CompanyText = styled.p`
  display: flex;
  margin-top: 36.792rem;
  margin-bottom: 1.4rem;
  ${({ theme }) => theme.fonts.SignBtnText};
`;
