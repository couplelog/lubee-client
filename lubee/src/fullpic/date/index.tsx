import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import EmojiDetailModal from "fullpic/components/EmojiDetailModal";
import DateContainer from "./components/DateContainer";
import DeletePicModal from "fullpic/components/DeletePicModal";
import FullpicHeader from "fullpic/components/FullpicHeader";
import { useLocation } from "react-router-dom";

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);
  const location = useLocation();
  const { monthHeader } = location.state as { monthHeader: string };
  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }
  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>(localStorage.getItem("emoji") || "");

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

  return (
    <Wrapper>
      <FullpicHeader handleTrashBtn={handleTrashBtn} headerDate={monthHeader} />
      <DateContainer
        setOpenEmojiDetail={setOpenEmojiDetail}
        setSelectedEmojiText={setSelectedEmojiText}
        selectedEmojiText={selectedEmojiText}
      />
      {openDeletePicModal && <DeletePicModal handleTrashBtn={handleTrashBtn} />}
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
