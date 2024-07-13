import { useState, useEffect } from "react";
import styled from "styled-components";
import { CheckIc, CheckYellowIc, PencilIc, EditXIc } from "@assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { CommentModalProps } from "../types/CommentModalTypes";

export default function MyCommentModal(props: CommentModalProps) {
  const { handleCloseBtn, profileIconSrc, commentText, setCommentText } = props;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const isDefaultText = commentText === "오늘의 데이트는 어떠셨나요?";
  const [isEditing, setIsEditing] = useState(isDefaultText);

  // isDefaultText일 때는 placeholder를 출력하기 위함
  useEffect(() => {
    if (isDefaultText) {
      setText("");
      setTextLength(0);
    } else {
      setText(commentText);
      setTextLength(commentText.length);
    }
    setIsEditing(isDefaultText);
  }, [commentText]);

  // placeholder의 글자수는 0으로 출력
  useEffect(() => {
    if (isDefaultText) {
      setTextLength(0);
    }
  }, [isDefaultText]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= 100) {
      setText(newText);
      setTextLength(newText.length);
    }
  };

  const handleSaveText = () => {
    if (textLength >= 10) {
      if (setCommentText) {
        setCommentText(text);
      } else {
        console.warn("setCommentText is undefined");
      }
      handleCloseBtn();
      setIsEditing(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <ProfileIcon as={profileIconSrc} />
          {isEditing ? (
            textLength >= 10 ? (
              <BtnWrapper type="button" onClick={handleSaveText}>
                <CheckYellowIcon />
              </BtnWrapper>
            ) : (
              <CheckIcon />
            )
          ) : (
            <>
              {!isDefaultText && (
                <EditIconsContainer>
                  <BtnWrapper type="button" onClick={handleEditClick}>
                    <PencilIcon />
                  </BtnWrapper>
                  <BtnWrapper type="button" onClick={handleCloseBtn}>
                    <XIcon />
                  </BtnWrapper>
                </EditIconsContainer>
              )}
            </>
          )}
        </HeaderContainer>
        <TextBox
          placeholder={isDefaultText ? "최소 10글자 이상 작성해주세요" : ""}
          value={isDefaultText && !isEditing ? "" : text}
          onChange={handleTextChange}
          disabled={!isEditing}
        />
        <LengthText>{textLength}/100</LengthText>
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

const CheckIcon = styled(CheckIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const CheckYellowIcon = styled(CheckYellowIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const TextBox = styled.textarea`
  ${({ theme }) => theme.fonts.SubTitle};

  overflow: hidden;
  width: 100%;
  height: 12.8rem;
  padding: 0 1.2rem;
  border: none;
  resize: none;
  color: ${({ theme }) => theme.colors.gray_700};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_200};
  }
`;

const LengthText = styled.p`
  ${({ theme }) => theme.fonts.Body_1};

  padding: 0 1.2rem 1.2rem 0;
  color: ${({ theme }) => theme.colors.gray_200};
`;

const EditIconsContainer = styled.section`
  display: flex;
`;

const PencilIcon = styled(PencilIc)`
  width: 2.6779rem;
  height: 2.4rem;
`;

const XIcon = styled(EditXIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
