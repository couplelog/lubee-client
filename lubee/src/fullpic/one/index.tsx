import styled from "styled-components";
import EmojiBar from "@common/components/EmojiBar";
import { useState, useRef, useEffect } from "react";
import EmojiDetailModal from "fullpic/components/EmojiDetailModal";
import OneContainer from "./components/OneContainer";
import DeletePicModal from "fullpic/components/DeletePicModal";
import FullpicHeader from "fullpic/components/FullpicHeader";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import EmojiTag from "@common/components/EmojiTag";
import { useLocation } from "react-router-dom";
import { useGetSpecificCalendar } from "home/hooks/useGetSpecificCalendar";
import { getTodayDate, getTodayMonth, getTodayYear } from "@common/utils/dateFormat";
import { todayHeaderDateFormat, today } from "@common/utils/dateFormat";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import { useGetOnePic } from "fullpic/hooks/useGetOnePic";

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);

  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>("");
  const [specificDto, setSpecificDto] = useState<MemoryBaseDtoDataTypes[]>();

  /*모달 애니메이션*/
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!modalRef.current || modalRef.current.contains(e.target as Node)) return;
      setOpenEmojiDetail(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [modalRef]);

  /*getSpecificCalendar*/
  const location = useLocation();
  const { memory_id } = location.state as { memory_id: number };

  const data = useGetSpecificCalendar({ year: getTodayYear, month: getTodayMonth, day: getTodayDate });
  const memoryBaseDto = specificDto?.find((memory) => memory.memory_id === memory_id);

  useEffect(() => {
    // data바뀔때마다 상태 업데이트
    if (data) {
      setSpecificDto(data?.response.memoryBaseListDto);
    }
  }, [data]);

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  useEffect(() => {
    if (memoryBaseDto?.reaction_first) {
      setSelectedEmojiText(memoryBaseDto.reaction_first);
    }
  }, [memoryBaseDto?.reaction_first]);

  const myEmoji = getEmojiSrc("me", selectedEmojiText) || undefined;
  const partnerEmoji = memoryBaseDto?.reaction_second
    ? getEmojiSrc("partner", memoryBaseDto.reaction_second)
    : undefined;

  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }

  const { data: emojiData } = useGetOnePic(memory_id);
  if (!emojiData) return <></>;
  const { reaction_first } = emojiData.response;
  console.log(emojiData);

  // account를 프로필이 null이 아닌 것으로 설정
  const account = memoryBaseDto?.writer_profile_first !== null ? "me" : "partner";
  console.log(memoryBaseDto);

  return (
    <Wrapper>
      <FullpicHeader
        handleTrashBtn={handleTrashBtn}
        headerDate={todayHeaderDateFormat(today)}
        selectedEmojiText={selectedEmojiText}
        memory_id={memory_id}
        reaction_first={reaction_first}
      />
      {memoryBaseDto && <OneContainer account={account} memoryBaseDto={memoryBaseDto} />}
      {(myEmoji || partnerEmoji) && (
        <EmojiTagContainer
          type="button"
          onClick={() => {
            if (setOpenEmojiDetail) {
              setOpenEmojiDetail(true);
            }
          }}>
          <EmojiTag font="fullPic">
            {myEmoji && <EmojiIcon as={myEmoji} />}
            {partnerEmoji && <EmojiIcon as={partnerEmoji} />}
          </EmojiTag>
        </EmojiTagContainer>
      )}
      <Footer>
        <EmojiBar setSelectedEmojiText={setSelectedEmojiText} memory_id={memory_id} />
      </Footer>
      {openDeletePicModal && <DeletePicModal handleTrashBtn={handleTrashBtn} memory_id={memory_id} />}
      {openEmojiDetail && (
        <EmojiDetailModal ref={modalRef} selectedEmojiText={selectedEmojiText} memory_id={memory_id} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const EmojiTagContainer = styled.button`
  position: absolute;
  top: 45rem;
  left: 4rem;
  padding: 0;
  border: none;
  background: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 2.1rem;

  /* padding: 10rem 1.42rem 2.1rem 0; */
`;

const EmojiIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;
