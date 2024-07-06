import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Header from "@components/fullPicToday/Header";
import DeletePicModal from "@components/fullPicToday/DeletePicModal";
import EmojiDetailModal from "@components/fullPicToday/EmojiDetailModal";
import MonthPic from "@components/fullPicMonth/MonthPic";

export default function MonthPicPage() {
  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>(localStorage.getItem("emoji") || "");

  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }

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
      <Header handleTrashBtn={handleTrashBtn} />
      <MonthPic
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
  height: 100vh;
`;
