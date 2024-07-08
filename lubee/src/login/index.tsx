import styled from "styled-components";
import { LogoIc, SymbolLoginIc } from "@assets/index";
import { btnOnboardingStyle } from "@styles/btnStyle";

export default function index() {
  return (
    <Wrapper>
      <LogoIcon />
      <SymbolLoginIcon />
      <LoginBtn>카카오 계정으로 로그인하기</LoginBtn>
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
  padding-top: 10.6rem;
`;

const LogoIcon = styled(LogoIc)`
  width: 15rem;
  height: 3.9rem;
`;

const SymbolLoginIcon = styled(SymbolLoginIc)`
  width: 56.7rem;
  height: 56.7rem;
  margin-top: 1.1rem;
`;

const LoginBtn = styled.button`
  ${btnOnboardingStyle}

  position: absolute;
  top: 62.5rem;
  background-color: #fee500;
  color: ${({ theme }) => theme.colors.gray_900};
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  margin: 1rem 0 1.4rem;
`;

const CompanyText = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};
`;
