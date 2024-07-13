import { useState } from "react";
import styled from "styled-components";
import CommentInputModal from "./CommentInputModal";

interface CommentInputBoxProps {
  profileIconSrc: string;
}

export default function CommentInputBox(props: CommentInputBoxProps) {
  const { profileIconSrc } = props;
  const [openCommentInputModal, setOpenCommentInputModal] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("오늘의 데이트는 어떠셨나요?");

  function handleCommentInputModal() {
    setOpenCommentInputModal(true);
  }

  function handleCloseBtn() {
    setOpenCommentInputModal(false);
  }

  function handleModifyBtn() {
    setOpenCommentInputModal(true);
  }

  return (
    <>
      <Container onClick={() => handleCommentInputModal()}>
        <ProfileIcon as={profileIconSrc} />
        <Text isDefault={commentText === "오늘의 데이트는 어떠셨나요?"}>{commentText}</Text>
      </Container>
      {openCommentInputModal && (
        <CommentInputModal
          handleCloseBtn={handleCloseBtn}
          handleModifyBtn={handleModifyBtn}
          profileIconSrc={profileIconSrc}
          setCommentText={setCommentText}
        />
      )}
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

const Text = styled.p<{ isDefault: boolean }>`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 10.9rem;
  color: ${({ theme, isDefault }) => (isDefault ? theme.colors.gray_400 : theme.colors.gray_700)};

  ${({ theme }) => theme.fonts.Caption_2};
`;

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;
