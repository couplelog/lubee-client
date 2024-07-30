import { BackIc, TrashIc } from "assets/index";
import { useUpdateReaction } from "@common/hooks/useUpdateReaction";
import { usePostReaction } from "@common/hooks/usePostReaction";
import { BtnWrapper } from "@styles/btnStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { emojiNumbersArrayState } from "@common/recoil/atom";

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

  const { mutate: postReactionMutate } = usePostReaction();
  const { mutate: updateReactionMutate } = useUpdateReaction();

  console.log("myEmoji", reaction_first);

  //recoil로 기존 array를 sessionstorage에서 가져오기
  const [numbersArray, setNumbersArray] = useRecoilState(emojiNumbersArrayState);
  console.log("기존 배열", numbersArray);

  // 배열에 특정 숫자가 있는지 확인하는 함수
  function isNumberInArray(number: number): boolean {
    return numbersArray.includes(number);
  }

  const prevPage = localStorage.getItem("currentPage");

  useEffect(() => {
    // 배열을 다시 세션 스토리지에 저장
    sessionStorage.setItem("numbersArray", JSON.stringify(numbersArray));
    console.log("업데이트 배열:", numbersArray);
  }, [numbersArray]);

  function moveToHome() {
    // 새로운 리액션 추가
    if (!isNumberInArray(memory_id)) {
      if (reaction_first === null && selectedEmojiText !== "") {
        postReactionMutate(
          { memory_id: memory_id, reaction: selectedEmojiText },
          {
            onSuccess: () => {
              // 배열에 숫자 추가
              const updatedArray = [...numbersArray, memory_id];
              setNumbersArray(updatedArray);
              // 로컬 스토리지에 업데이트된 배열 저장
              sessionStorage.setItem("numbersArray", JSON.stringify(updatedArray));
              // 페이지 이동
              if (prevPage === "today") {
                navigate("/home/today");
              } else {
                navigate("/home/month");
              }
            },
          },
        );
      } else {
        if (prevPage === "today") {
          navigate("/home/today");
        } else {
          navigate("/home/month");
        }
      }
    }
    // 리액션이 다를 때
    else {
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
