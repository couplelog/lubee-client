import { useState, useEffect } from "react";
import styled from "styled-components";
import { CheckIc, CheckYellowIc, PencilIc, EditXIc } from "@assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { CommentModalProps } from "home/today/types/CommentModalTypes";
import { usePostDateComment } from "home/hooks/usePostDateComment";
import { useUpdateDateComment } from "home/hooks/useUpdateDateComment";
import { getAPIDate } from "@common/utils/dateFormat";

export default function MyCommentModal(props: CommentModalProps) {
  const { handleCloseBtn, profileIconSrc, commentText, setCommentText } = props;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);
  const isDefaultText = commentText === "오늘의 데이트는 어떠셨나요?";
  const [isEditing, setIsEditing] = useState(isDefaultText);
  const { mutate: postDateCommentMutate } = usePostDateComment();
  const { mutate: updateDateCommentMutate } = useUpdateDateComment();
  const [commentId, setCommentId] = useState<number | null>(null); // 코멘트id 저장

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
        // coupleId는 임의로 1 넣어둠!
        postDateCommentMutate(
          { content: text, coupleId: 1, date: getAPIDate() },
          {
            onSuccess: (data) => {
              const id = data.response; // response 값을 commentId로 사용
              console.log("POST 성공, 받은 ID:", id); // 로그 추가
              if (id !== null && id !== undefined) {
                setCommentId(id); // POST 요청 후 받은 코멘트 ID 저장
                // 상태가 업데이트된 이후 PUT 요청 시도
                updateCommentIfNeeded(id, text);
              } else {
                console.warn("POST 성공했지만 response 값이 null 또는 undefined입니다."); // 로그 추가
              }
            },
            onError: (error) => {
              console.error("POST 요청 실패", error); // 로그 추가
            },
          },
        );
      } else {
        // commentId가 존재할 때만 코멘트 업데이트 요청
        if (commentId !== null) {
          console.log("PUT 요청 시작, ID:", commentId); // 로그 추가
          updateDateCommentMutate(
            { datecommentId: commentId, content: text },
            {
              onSuccess: (data) => {
                console.log("PUT 성공", data); // 로그 추가
              },
              onError: (error) => {
                console.error("PUT 요청 실패", error); // 로그 추가
              },
            },
          );
        } else {
          console.warn("commentId가 null입니다."); // 로그 추가
        }
      }
    }
  };

  // 상태가 업데이트된 이후 PUT 요청을 보내기 위한 함수
  const updateCommentIfNeeded = (id: number, content: string) => {
    console.log("상태 업데이트 후 PUT 요청 시작, ID:", id); // 로그 추가
    updateDateCommentMutate(
      { datecommentId: id, content: content },
      {
        onSuccess: (data) => {
          console.log("PUT 성공", data); // 로그 추가
        },
        onError: (error) => {
          console.error("PUT 요청 실패", error); // 로그 추가
        },
      },
    );
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
  height: 100%;
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
