import styled from "styled-components";

interface ConfirmModalProps {
  handleConfirmBtn: () => void;
  handleCloseBtn: () => void;
  titleText: string;
  subtitleText: string;
  btnText: string;
}

export default function ConfirmModal(props: ConfirmModalProps) {
  const { handleConfirmBtn, handleCloseBtn, titleText, subtitleText, btnText } = props;

  return (
    <Background>
      <Container>
        <Text>
          <TitleText>{titleText}</TitleText>
          <SubtitleText>{subtitleText}</SubtitleText>
        </Text>
        <ConfirmBtn
          type="button"
          onClick={() => {
            handleConfirmBtn();
          }}>
          {btnText}
        </ConfirmBtn>
        <CloseBtn
          type="button"
          onClick={() => {
            handleCloseBtn();
          }}>
          취소
        </CloseBtn>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  position: absolute;
  top: 29.05rem;
  left: 5.7rem;
  width: 27.6rem;
  height: 20.2rem;
  padding: 3.2rem 0 1.2rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const SubtitleText = styled.p`
  ${({ theme }) => theme.fonts.SubTitle};

  color: ${({ theme }) => theme.colors.gray_600};
`;

const ConfirmBtn = styled.button`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.red};
`;

const CloseBtn = styled.button`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.gray_400};
`;
