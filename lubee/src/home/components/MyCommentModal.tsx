import { useState, useEffect } from "react";
import styled from "styled-components";
import { CheckIc, CheckYellowIc, PencilIc, EditXIc } from "assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { CommentModalProps } from "home/today/types/CommentModalTypes";
import { usePostDateComment } from "home/hooks/usePostDateComment";
import { useUpdateDateComment } from "home/hooks/useUpdateDateComment";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";

export default function MyCommentModal(props: CommentModalProps) {
  const { handleCloseBtn, profileIconSrc, commentText, setCommentText, finalServerDate, isDateDetailModal } = props;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);

  const myDefaultTexts = ["오늘의 데이트는 어떠셨나요?", "이날 데이트는 어떠셨나요?"];
  const isDefaultText = myDefaultTexts.includes(commentText);
  const [isEditing, setIsEditing] = useState(isDefaultText);

  const { mutate: postDateCommentMutate } = usePostDateComment();
  const { mutate: updateDateCommentMutate } = useUpdateDateComment();

  const { refetch } = useGetTodayDateComment(finalServerDate || "");

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

      if (isDefaultText) {
        // 서버에 코멘트 POST 요청으로
        if (finalServerDate) {
          postDateCommentMutate(
            { content: text, date: finalServerDate },
            {
              onSuccess: () => {
                refetch(); // 코멘트 저장 후 데이터 다시 불러오기
              },
            },
          );
        } else {
          console.error("finalServerDate is undefined");
        }
      } else {
        // 서버에 코멘트 UPDATE 요청으로
        if (finalServerDate) {
          updateDateCommentMutate(
            { content: text, date: finalServerDate },
            {
              onSuccess: () => {
                refetch(); // 코멘트 업데이트 후 데이터 다시 불러오기
              },
            },
          );
        } else {
          console.error("finalServerDate is undefined");
        }
      }
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Background>
      <Container $isDateDetailModal={isDateDetailModal}>
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
          $textLength={textLength}
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
  height: 100%;
  ${({ theme }) => theme.effects.dimmed_40};
`;

// 월간 DateDetailModal에서 띄웠을 때 position: fixed로 바꾸면 됨
const Container = styled.section<{ $isDateDetailModal: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  position: ${({ $isDateDetailModal }) => ($isDateDetailModal ? "fixed" : "absolute")};
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

const TextBox = styled.textarea<{ $textLength: number }>`
  ${({ theme }) => theme.fonts.SubTitle};

  overflow: hidden;
  width: 100%;
  height: 12.8rem;
  padding: 0 1.2rem;
  border: none;
  resize: none;
  color: ${({ theme, $textLength }) => ($textLength >= 10 ? theme.colors.gray_700 : theme.colors.gray_200)};
  outline: none;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

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
