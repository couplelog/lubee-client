import { BackIc } from "assets/index";
import styled from "styled-components";

interface OnboardingHeaderProps {
  handleBackBtn?: () => void;
  title: string;
}

export default function OnboardingHeader(props: OnboardingHeaderProps) {
  const { handleBackBtn, title } = props;

  return (
    <Wrapper>
      <BtnWrapper
        type="button"
        onClick={() => {
          if (handleBackBtn) {
            handleBackBtn();
          }
        }}>
        <BackIcon />
      </BtnWrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
  padding: 2rem;
`;

const BtnWrapper = styled.button`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

const BackIcon = styled(BackIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body_4}

  color: ${({ theme }) => theme.colors.gray_800};
`;
