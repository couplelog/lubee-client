import styled from "styled-components";

interface CopyCodeModalProps {
  handleCloseBtn: () => void;
}

export default function CopyCodeModal(props: CopyCodeModalProps) {
  const { handleCloseBtn } = props;

  return (
    <Background>
      <Container>
        <Text>
          <h2>나의 러비코드가 복사되었어요</h2>
          <p>연인에게 공유해주세요</p>
        </Text>
        <CloseBtn
          type="button"
          onClick={() => {
            handleCloseBtn();
          }}>
          닫기
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
  gap: 4rem;
  align-items: center;
  position: absolute;
  top: 29.05rem;
  left: 5.7rem;
  width: 276px;
  height: 169px;
  padding: 3.2rem 0 1.2rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;

  & > h2 {
    ${({ theme }) => theme.fonts.Body_4};

    color: ${({ theme }) => theme.colors.gray_800};
  }

  & > p {
    ${({ theme }) => theme.fonts.SubTitle};

    color: ${({ theme }) => theme.colors.gray_600};
  }
`;

const CloseBtn = styled.button`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.yellow};
`;
