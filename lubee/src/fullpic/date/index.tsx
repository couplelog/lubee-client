import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import EmojiDetailModal from "fullpic/components/EmojiDetailModal";
import DateContainer from "./components/DateContainer";
import DeletePicModal from "fullpic/components/DeletePicModal";
import FullpicHeader from "fullpic/components/FullpicHeader";
import { useLocation } from "react-router-dom";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import { useGetOnePic } from "fullpic/hooks/useGetOnePic";
import { LeftArrowIc, RightArrowIc } from "assets";

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);
  const location = useLocation();

  const { monthHeader } = location.state as { monthHeader: string };
  const { specificDto } = location.state as { specificDto: MemoryBaseDtoDataTypes[] };
  const { memory_id } = location.state as { memory_id: number };

  const [memoryId, setMemoryId] = useState<number>(memory_id);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(specificDto.length / itemsPerPage);

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

  /*페이지 네이션*/
  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setMemoryId(specificDto[newPage * itemsPerPage].memory_id);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setMemoryId(specificDto[newPage * itemsPerPage].memory_id);
    }
  };

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
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage !== 0 ? (
        <LeftPageButton onClick={handlePrevPage}>
          <LeftArrowIcon />
        </LeftPageButton>
      ) : null}
      {currentPage !== totalPages - 1 ? (
        <RightPageButton onClick={handleNextPage}>
          <RightArrowIcon />
        </RightPageButton>
      ) : null}
      {openDeletePicModal && <DeletePicModal handleTrashBtn={handleTrashBtn} memory_id={memoryId} />}
      {openEmojiDetail && (
        <EmojiDetailModal ref={modalRef} selectedEmojiText={selectedEmojiText} memory_id={memoryId} />
      )}
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

const LeftPageButton = styled.button`
  position: absolute;
  top: 31rem;
  left: 1.5rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const RightPageButton = styled.button`
  position: absolute;
  top: 31rem;
  right: 1.5rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const LeftArrowIcon = styled(LeftArrowIc)`
  width: 3rem;
  height: 3rem;
`;

const RightArrowIcon = styled(RightArrowIc)`
  width: 3rem;
  height: 3rem;
`;
