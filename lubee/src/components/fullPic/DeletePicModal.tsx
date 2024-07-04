import styled from "styled-components";

interface DeletePicModalProps {
  openTrash: (open: boolean) => void;
}

export default function DeletePicModal(props: DeletePicModalProps) {
  const { openTrash } = props;

  return (
    <Background>
      <Container>
        <Text>
          <h2>이 사진을 삭제하시겠어요?</h2>
          <p>영구적으로 사진이 삭제됩니다</p>
        </Text>
        <BtnContainer>
          <DeleteBtn>삭제</DeleteBtn>
          <CloseBtn
            type="button"
            onClick={() => {
              openTrash(false);
            }}>
            닫기
          </CloseBtn>
        </BtnContainer>
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
  top: 27.4rem;
  left: 6.38rem;
  padding: 3.2rem 4.5rem 1.2rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const DeleteBtn = styled.button`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.red};
`;

const CloseBtn = styled.button`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.gray_400};
`;
