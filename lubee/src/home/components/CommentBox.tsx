import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCommentModal from "./MyCommentModal";
import PartnerCommentModal from "./PartnerCommentModal";

interface CommentBoxProps {
  profileIconSrc: string;
  isMyComment: boolean;
  comment: string;
  isToday: boolean;
  finalServerDate?: string;
}

export default function CommentBox(props: CommentBoxProps) {
  const { profileIconSrc, isMyComment, comment, isToday, finalServerDate } = props;
  const [openCommentInputModal, setOpenCommentInputModal] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>(
    isToday ? "오늘의 데이트는 어떠셨나요?" : "이날 데이트는 어떠셨나요?",
  );

  const myDefaultText = isToday ? "오늘의 데이트는 어떠셨나요?" : "이날 데이트는 어떠셨나요?";
  const partnerDefaultText = "연인은 아직 작성하지 않았어요";
  const myCommentText = comment || myDefaultText;
  const partnerCommentText = comment || partnerDefaultText;

  useEffect(() => {
    if (isMyComment) {
      setCommentText(myCommentText);
    } else {
      if (myCommentText === myDefaultText && partnerCommentText === partnerDefaultText) {
        setCommentText(partnerDefaultText);
      } else if (myCommentText !== myDefaultText) {
        setCommentText(partnerDefaultText);
      } else if (myCommentText === myDefaultText && partnerCommentText !== partnerDefaultText) {
        setCommentText("나의 한마디를 입력하면 볼 수 있어요!");
      }
    }
  }, [isMyComment, myCommentText, partnerCommentText]);

  function handleCommentInputModal() {
    // 연인 미작성, 나 미작성일 때 PartnerCommentModal 안 열리게끔
    // 아직 MyCommentModal에서 작성해도 "나의 한마디를 입력하면 볼 수 있어요!" 뜨는데 서버 연결로 바뀔 예정 . .
    const isDefaultText = commentText === partnerDefaultText || commentText === "나의 한마디를 입력하면 볼 수 있어요!";

    if (!isDefaultText) {
      setOpenCommentInputModal(true);
    }
  }

  function handleCloseBtn() {
    setOpenCommentInputModal(false);
  }

  return (
    <>
      <Container onClick={handleCommentInputModal} $isToday={isToday}>
        <ProfileIcon as={profileIconSrc} />
        <Text
          $isDefault={
            commentText === myDefaultText ||
            commentText === "나의 한마디를 입력하면 볼 수 있어요!" ||
            commentText === partnerDefaultText
          }>
          {commentText}
        </Text>
      </Container>
      {openCommentInputModal &&
        (isMyComment ? (
          <MyCommentModal
            handleCloseBtn={handleCloseBtn}
            profileIconSrc={profileIconSrc}
            commentText={commentText}
            setCommentText={setCommentText}
            finalServerDate={finalServerDate}
          />
        ) : (
          <PartnerCommentModal
            handleCloseBtn={handleCloseBtn}
            profileIconSrc={profileIconSrc}
            commentText={commentText}
          />
        ))}
    </>
  );
}

const Container = styled.div<{ $isToday: boolean }>`
  display: flex;
  gap: 0.4rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme, $isToday }) => ($isToday ? theme.colors.white : theme.colors.gray_50)};
  cursor: pointer;
`;

const Text = styled.p<{ $isDefault: boolean }>`
  display: -webkit-box;
  overflow: hidden;
  width: 10.9rem;
  color: ${({ theme, $isDefault }) => ($isDefault ? theme.colors.gray_400 : theme.colors.gray_700)};
  text-overflow: ellipsis;
  white-space: pre-wrap; /* 줄바꿈을 허용 */
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.fonts.Caption_2};
`;

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;
