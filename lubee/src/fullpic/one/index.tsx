import styled from "styled-components";
import EmojiBar from "@common/components/EmojiBar";
import { useState, useRef, useEffect } from "react";
import { MintHeartSmallIcon } from "@common/components/SmallEmojiIcons";
import { smallEmojisData } from "@common/core/smallEmojisData";
import { EmojisDataTypes } from "@common/types/EmojisDataTypes";
import fullPic from "@assets/image/fullPic.png";
import EmojiDetailModal from "fullpic/components/EmojiDetailModal";
import OneContainer from "./components/OneContainer";

export default function index() {
  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>(localStorage.getItem("emoji") || "");

  const selectedEmojiData = smallEmojisData.find((emoji: EmojisDataTypes) => emoji.emoji === selectedEmojiText);
  const EmojiIcon = selectedEmojiData ? selectedEmojiData.iconSrc : null;

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
      <OneContainer name={"맹꽁이"} picSrc={fullPic} />
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
