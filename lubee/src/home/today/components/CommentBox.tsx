import { useState, useEffect } from "react";
import styled from "styled-components";
import MyCommentModal from "./MyCommentModal";
import PartnerCommentModal from "./PartnerCommentModal";

interface CommentBoxProps {
  profileIconSrc: string;
  isMyComment: boolean;

  // 코멘트는 서버로부터 받아오기
  myComment?: string;
  partnerComment?: string;
}

export default function CommentBox(props: CommentBoxProps) {
  const { profileIconSrc, isMyComment, myComment, partnerComment } = props;
  const [openCommentInputModal, setOpenCommentInputModal] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("오늘의 데이트는 어떠셨나요?");

  const myDefaultText = "오늘의 데이트는 어떠셨나요?";
  const partnerDefaultText = "연인은 아직 작성하지 않았어요.";
  const myCommentText = myComment || myDefaultText;
  const partnerCommentText = partnerComment || partnerDefaultText;

  useEffect(() => {
    if (isMyComment) {
      setCommentText(myCommentText);
    } else {
      if (myCommentText === myDefaultText && partnerCommentText === partnerDefaultText) {
        setCommentText(partnerDefaultText);
      } else if (myCommentText !== myDefaultText && partnerCommentText === partnerDefaultText) {
        setCommentText(partnerDefaultText);
      } else if (myCommentText !== myDefaultText && partnerCommentText !== partnerDefaultText) {
        setCommentText(partnerCommentText);
      } else if (myCommentText === myDefaultText && partnerCommentText !== partnerDefaultText) {
        setCommentText("나의 한마디를 입력하면 볼 수 있어요!");
      }
    }
  }, [isMyComment, myCommentText, partnerCommentText]);

  function handleCommentInputModal() {
    setOpenCommentInputModal(true);
  }

  function handleCloseBtn() {
    setOpenCommentInputModal(false);
  }

  return (
    <>
      <Container onClick={() => handleCommentInputModal()}>
        <ProfileIcon as={profileIconSrc} />
        <Text $isDefault={commentText === "오늘의 데이트는 어떠셨나요?"}>{commentText}</Text>
      </Container>
      {openCommentInputModal &&
        (isMyComment ? (
          <MyCommentModal
            handleCloseBtn={handleCloseBtn}
            profileIconSrc={profileIconSrc}
            commentText={commentText}
            setCommentText={setCommentText}
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

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
  height: 6.4rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const Text = styled.p<{ $isDefault: boolean }>`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 10.9rem;
  color: ${({ theme, $isDefault }) => ($isDefault ? theme.colors.gray_400 : theme.colors.gray_700)};

  ${({ theme }) => theme.fonts.Caption_2};
`;

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;
