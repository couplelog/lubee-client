import styled from "styled-components";
import { LogoIc, SymbolLoginIc } from "@assets/index";
import { BtnOnboarding } from "@styles/BtnStyle";
import { flexCenter } from "styles/globalStyle";

export default function LoginPage() {
  return (
    <Wrapper>
      <LogoIcon />
      <SymbolLoginIcon />
      <LoginBtn>카카오 계정으로 로그인하기</LoginBtn>
      <CompanyText>(C) COUPLE-LOGUE</CompanyText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LogoIcon = styled(LogoIc)`
  display: flex;
  width: 15rem;
  height: 3.9rem;
  margin-top: 10.6rem;
`;

const SymbolLoginIcon = styled(SymbolLoginIc)`
  display: flex;
  width: 56.7rem;
  height: 56.7rem;
  margin-top: 1.1rem;
`;

const LoginBtn = styled(BtnOnboarding)`
  position: absolute;
  top: 62.5rem;
  background-color: #fee500;
  color: ${({ theme }) => theme.colors.gray_900};
  cursor: pointer;
`;

const CompanyText = styled.p`
  display: flex;
  margin-bottom: 1.4rem;
  ${({ theme }) => theme.fonts.SignBtnText};
`;
