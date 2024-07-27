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

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);

  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>("");

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

  const response = useGetSpecificCalendar({ year: getTodayYear, month: getTodayMonth, day: getTodayDate });
  //let specificDto: MemoryBaseDtoDataTypes[] | undefined;
  //specificDto = response?.response.memoryBaseListDto;
  const specificDto = response?.response.memoryBaseListDto;
  const memoryBaseDto = specificDto?.find((memory) => memory.memory_id === memory_id);

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  useEffect(() => {
    if (memoryBaseDto?.reaction1) {
      setSelectedEmojiText(memoryBaseDto.reaction1);
    }
  }, [memoryBaseDto?.reaction1]);

  //const myEmoji = getEmojiSrc("me", selectedEmojiText);
  let myEmoji = getEmojiSrc("me", selectedEmojiText) || undefined;
  const partnerEmoji = memoryBaseDto?.reaction2 ? getEmojiSrc("partner", memoryBaseDto.reaction2) : undefined;

  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }

  return (
    <Wrapper>
      <FullpicHeader
        handleTrashBtn={handleTrashBtn}
        headerDate={todayHeaderDateFormat(today)}
        selectedEmojiText={selectedEmojiText}
        memory_id={memory_id}
      />
      {memoryBaseDto && <OneContainer account="partner" memoryBaseDto={memoryBaseDto} />}
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
        <EmojiBar setSelectedEmojiText={setSelectedEmojiText} />
      </Footer>
      {openDeletePicModal && <DeletePicModal handleTrashBtn={handleTrashBtn} memory_id={memory_id} />}
      {openEmojiDetail && <EmojiDetailModal ref={modalRef} selectedEmojiText={selectedEmojiText} />}
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
