import { BackIc, TrashIc } from "assets/index";
import { useUpdateReaction } from "@common/hooks/useUpdateReaction";
import { usePostReaction } from "@common/hooks/usePostReaction";
import { BtnWrapper } from "@styles/btnStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

interface FullpicHeaderProps {
  handleTrashBtn: (open: boolean) => void;
  headerDate: string;
  selectedEmojiText: string;
  memory_id: number;
  reaction_first: string | null;
}

export default function FullpicHeader(props: FullpicHeaderProps) {
  const { handleTrashBtn, headerDate, selectedEmojiText, memory_id, reaction_first } = props;
  const navigate = useNavigate();
  const [countPost, setCountPost] = useState(0);

  const { mutate: postReactionMutate } = usePostReaction();
  const { mutate: updateReactionMutate } = useUpdateReaction();

  console.log("myEmoji", reaction_first);

  useEffect(() => {
    setCountPost(1);
    console.log(countPost);
  }, [postReactionMutate]);

  function moveToHome() {
    const prevPage = localStorage.getItem("currentPage");

    // 새로운 리액션 추가
    if (reaction_first === null && selectedEmojiText !== "" && countPost !== 1) {
      postReactionMutate(
        { memory_id: memory_id, reaction: selectedEmojiText },
        {
          onSuccess: () => {
            if (prevPage === "today") {
              navigate("/home/today");
            } else {
              navigate("/home/month");
            }
          },
        },
      );
    }
    // 리액션이 다를때
    else if (reaction_first !== selectedEmojiText) {
      updateReactionMutate(
        { memory_id: memory_id, reaction: selectedEmojiText },
        {
          onSuccess: () => {
            if (prevPage === "today") {
              navigate("/home/today");
            } else {
              navigate("/home/month");
            }
          },
        },
      );
    }
    // no change일때
    else {
      if (prevPage === "today") {
        navigate("/home/today");
      } else {
        navigate("/home/month");
      }
    }
  }

  return (
    <DateBar>
      <BtnWrapper type="button" onClick={moveToHome}>
        <BackIcon />
      </BtnWrapper>
      <Date>{headerDate}</Date>
      <BtnWrapper
        type="button"
        onClick={() => {
          handleTrashBtn(true);
        }}>
        <TrashIcon />
      </BtnWrapper>
    </DateBar>
  );
}

const DateBar = styled.div`
  display: flex;
  gap: 4.2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem 0;
`;

const BackIcon = styled(BackIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Date = styled.p`
  ${({ theme }) => theme.fonts.Body_4}

  color: ${({ theme }) => theme.colors.gray_800};
`;

const TrashIcon = styled(TrashIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
