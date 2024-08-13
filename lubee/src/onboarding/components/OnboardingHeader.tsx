import { BackIc, XIc } from "assets/index";
import styled from "styled-components";

interface OnboardingHeaderProps {
  handleBackBtn?: () => void;
  handleXBtn?: () => void;
  showBackIcon?: boolean;
  showXIcon?: boolean;
}

export default function OnboardingHeader(props: OnboardingHeaderProps) {
  const { handleBackBtn, handleXBtn, showBackIcon, showXIcon } = props;

  return (
    <Wrapper>
      {showBackIcon && (
        <BtnWrapper
          type="button"
          onClick={() => {
            if (handleBackBtn) {
              handleBackBtn();
            }
          }}
          $position="left">
          <BackIcon />
        </BtnWrapper>
      )}
      {showXIcon && (
        <BtnWrapper
          type="button"
          onClick={() => {
            if (handleXBtn) {
              handleXBtn();
            }
          }}
          $position="right">
          <XIcon />
        </BtnWrapper>
      )}
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

const BtnWrapper = styled.button<{ $position: "left" | "right" }>`
  position: absolute;
  cursor: pointer;
  ${({ $position }) => $position}: 0;
`;

const BackIcon = styled(BackIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const XIcon = styled(XIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
