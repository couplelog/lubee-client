import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCommentModal from "./MyCommentModal";
import PartnerCommentModal from "./PartnerCommentModal";

interface CommentBoxProps {
  profileIconSrc: string;
  isMyComment: boolean;
  isWhite: boolean;
  finalServerDate?: string;
  isDateDetailModal: boolean;
  myComment: string;
  partnerComment: string;
}

export default function CommentBox(props: CommentBoxProps) {
  const { profileIconSrc, isMyComment, isWhite, finalServerDate, isDateDetailModal, myComment, partnerComment } = props;
  const [openCommentInputModal, setOpenCommentInputModal] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");

  const myDefaultText = isWhite ? "오늘의 데이트는 어떠셨나요?" : "이날 데이트는 어떠셨나요?";
  const partnerDefaultText = "연인은 아직 작성하지 않았어요";

  console.log("partnerComment", partnerComment === "");
  console.log("myComment", myComment === "");
  console.log("isMyComment", isMyComment);

  // comment값이 업데이트될 때마다 commentText 업데이트
  useEffect(() => {
    if (isMyComment) {
      setCommentText(myComment || myDefaultText);
    } else {
      // 파트너 코멘트가 있을 때
      if (partnerComment !== "") {
        // 파트너 코멘트가 있는데 나는 없을 때
        if (myComment === "") {
          setCommentText("나의 한마디를 입력하면 볼 수 있어요");
        }
        //파트너 코멘트가 있는데 나도 코멘트가 있을 때
        else {
          setCommentText(partnerComment);
        }
        // 파트너 코멘트가 없을 때
      } else {
        setCommentText("연인은 아직 작성하지 않았어요");
      }
    }
  }, [myComment, isMyComment, partnerComment]);

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
