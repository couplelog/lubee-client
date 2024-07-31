import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCommentModal from "./MyCommentModal";
import PartnerCommentModal from "./PartnerCommentModal";

interface CommentBoxProps {
  profileIconSrc: string;
  isMyComment: boolean;
  comment: string;
  isWhite: boolean;
  finalServerDate?: string;
  isDateDetailModal: boolean;
}

export default function CommentBox(props: CommentBoxProps) {
  const { profileIconSrc, isMyComment, comment, isWhite, finalServerDate, isDateDetailModal } = props;
  const [openCommentInputModal, setOpenCommentInputModal] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");

  const myDefaultText = isWhite ? "오늘의 데이트는 어떠셨나요?" : "이날 데이트는 어떠셨나요?";
  const partnerDefaultText = "연인은 아직 작성하지 않았어요";

  // comment값이 업데이트될 때마다 commentText 업데이트
  useEffect(() => {
    if (isMyComment) {
      setCommentText(comment || myDefaultText);
    } else {
      if (comment) {
        setCommentText("나의 한마디를 입력하면 볼 수 있어요");
      } else {
        setCommentText(partnerDefaultText);
      }
    }
  }, [comment, isMyComment]);

  function handleCommentInputModal() {
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
      <Container onClick={handleCommentInputModal} $isWhite={isWhite}>
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
            isDateDetailModal={isDateDetailModal}
          />
        ) : (
          <PartnerCommentModal
            handleCloseBtn={handleCloseBtn}
            profileIconSrc={profileIconSrc}
            commentText={commentText}
            isDateDetailModal={isDateDetailModal}
          />
        ))}
    </>
  );
}

const Container = styled.div<{ $isWhite: boolean }>`
  display: flex;
  gap: 0.4rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme, $isWhite }) => ($isWhite ? theme.colors.white : theme.colors.gray_50)};
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
