import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EditXIc } from "@assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { CommentModalProps } from "../types/CommentModalTypes";

export default function PartnerCommentInputModal(props: CommentModalProps) {
  const { handleCloseBtn, profileIconSrc, commentText } = props;

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <ProfileIcon as={profileIconSrc} />
          <BtnWrapper type="button" onClick={handleCloseBtn}>
            <XIcon />
          </BtnWrapper>
        </HeaderContainer>
        <TextBox value={commentText} disabled />
      </Container>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  z-index: 2;
  inset: 0;
  height: 100vh;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 24rem;
  left: 5.6rem;
  width: 27.8rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 1.2rem;
`;

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;

const TextBox = styled.textarea`
  ${({ theme }) => theme.fonts.SubTitle};

  overflow: hidden;
  width: 100%;
  padding: 0 1.2rem;
  border: none;
  resize: none;
  color: ${({ theme }) => theme.colors.gray_700};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_200};
  }
`;

const XIcon = styled(EditXIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
