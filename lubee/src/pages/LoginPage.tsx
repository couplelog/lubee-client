import styled from "styled-components";
import { LogoIc, SymbolLoginIc } from "@assets/index";
import { BtnOnboarding } from "@styles/BtnStyle";

export default function LoginPage() {
  return (
    <Wrapper>
      <LogoIcon />
      <SymbolLoginIcon />
      <OnboardingBtn>카카오 계정으로 로그인하기</OnboardingBtn>
      <CompanyText>(C) COUPLE-LOGUE</CompanyText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const OnboardingBtn = styled(BtnOnboarding)`
  background-color: #fee500;
  color: ${({ theme }) => theme.colors.gray_900};
  cursor: pointer;
`;

const CompanyText = styled.p`
  display: flex;
  margin-bottom: 1.4rem;
  ${({ theme }) => theme.fonts.SignBtnText};
`;
