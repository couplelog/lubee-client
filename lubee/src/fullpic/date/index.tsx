import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import EmojiDetailModal from "fullpic/components/EmojiDetailModal";
import DateContainer from "./components/DateContainer";
import DeletePicModal from "fullpic/components/DeletePicModal";
import FullpicHeader from "fullpic/components/FullpicHeader";
import { useLocation } from "react-router-dom";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import { useGetOnePic } from "fullpic/hooks/useGetOnePic";

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);
  const location = useLocation();

  const { monthHeader } = location.state as { monthHeader: string };
  const { specificDto } = location.state as { specificDto: MemoryBaseDtoDataTypes[] };
  const { memory_id } = location.state as { memory_id: number };

  const [memoryId, setMemoryId] = useState<number>(memory_id);

  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }
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

  const { data: emojiData } = useGetOnePic(memory_id);
  if (!emojiData) return <></>;
  const { reaction_first } = emojiData.response;

  return (
    <Wrapper>
      <FullpicHeader
        handleTrashBtn={handleTrashBtn}
        headerDate={monthHeader}
        selectedEmojiText={selectedEmojiText}
        memory_id={memoryId}
        reaction_first={reaction_first}
      />
      <DateContainer
        setOpenEmojiDetail={setOpenEmojiDetail}
        setSelectedEmojiText={setSelectedEmojiText}
        selectedEmojiText={selectedEmojiText}
        specificDto={specificDto}
        memory_id={memory_id}
        setMemoryId={setMemoryId}
      />
      {openDeletePicModal && <DeletePicModal handleTrashBtn={handleTrashBtn} memory_id={memoryId} />}
      {openEmojiDetail && <EmojiDetailModal ref={modalRef} selectedEmojiText={selectedEmojiText} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
