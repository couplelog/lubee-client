import styled from "styled-components";
import { LogoIc, SymbolLoginIc } from "@assets/index";
import { btnOnboardingStyle } from "@styles/btnStyle";
import CompanyText from "@common/components/CompanyText";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();

  function moveToOnboarding() {
    navigate("/onboarding");
  }
  return (
    <Wrapper>
      <LogoIcon />
      <SymbolLoginIcon />
      <LoginBtn type="button" onClick={moveToOnboarding}>
        카카오 계정으로 로그인하기
      </LoginBtn>
      <CompanyText />
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
