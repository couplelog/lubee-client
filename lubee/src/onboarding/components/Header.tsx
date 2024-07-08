import { BackIc, XIc } from "@assets/index";
import styled from "styled-components";

interface HeaderProps {
  handleBackBtn?: () => void;
  handleXBtn?: () => void;
  showBackIcon?: boolean;
  showXIcon?: boolean;
  showTitle?: boolean;
}

export default function Header(props: HeaderProps) {
  const { handleBackBtn, handleXBtn, showBackIcon, showXIcon, showTitle } = props;

  return (
    <Wrapper>
      {showBackIcon && (
        <BtnWrapper
          type="button"
          onClick={() => {
            if (handleBackBtn) {
              handleBackBtn();
            }
          }}>
          <BackIcon />
        </BtnWrapper>
      )}
      {showTitle && <Title>프로필 커스텀</Title>}
      {showXIcon && (
        <BtnWrapper
          type="button"
          onClick={() => {
            if (handleXBtn) {
              handleXBtn();
            }
          }}>
          <XIcon />
        </BtnWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  padding: 2rem;
`;

const BtnWrapper = styled.button`
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

const XIcon = styled(XIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
