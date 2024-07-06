import styled from "styled-components";
import EmojiBar from "@components/@common/EmojiBar";
import { useState, useRef, useEffect } from "react";
import { MintHeartSmallIcon } from "@styles/@common/commonEmojiSmall";
import { smallEmojisData } from "@core/smallEmojisData";
import { EmojisDataTypes } from "types/EmojisDataTypes";
import fullPic from "@assets/image/fullPic.png";
import Header from "@components/fullPicToday/Header";
import DeletePicModal from "@components/fullPicToday/DeletePicModal";
import EmojiDetailModal from "@components/fullPicToday/EmojiDetailModal";
import TodayPic from "@components/fullPicToday/TodayPic";

export default function FullPicPage() {
  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>(localStorage.getItem("emoji") || "");

  const selectedEmojiData = smallEmojisData.find((emoji: EmojisDataTypes) => emoji.emoji === selectedEmojiText);
  const EmojiIcon = selectedEmojiData ? selectedEmojiData.iconSrc : null;

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
      <TodayPic name={"맹꽁이"} picSrc={fullPic} />
      <EmojiTag
        type="button"
        onClick={() => {
          setOpenEmojiDetail(true);
        }}>
        {EmojiIcon && <EmojiIcon />}
        <MintHeartSmallIcon />
      </EmojiTag>
      <Footer>
        <EmojiBar setSelectedEmojiText={setSelectedEmojiText} />
      </Footer>
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

const EmojiTag = styled.button`
  display: flex;
  gap: 0.4rem;
  position: absolute;
  top: 45rem;
  left: 4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 31px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15.38rem 1.42rem 2.1rem;
`;
