import styled from "styled-components";
import EmojiBar from "@common/components/EmojiBar";
import { useState, useRef, useEffect } from "react";
import fullPic from "@assets/image/fullPic.png";
import EmojiDetailModal from "fullpic/components/EmojiDetailModal";
import OneContainer from "./components/OneContainer";
import DeletePicModal from "fullpic/components/DeletePicModal";
import FullpicHeader from "fullpic/components/FullpicHeader";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import EmojiTag from "@common/components/EmojiTag";

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);

  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }
  const [openEmojiDetail, setOpenEmojiDetail] = useState<boolean>(false);
  const [selectedEmojiText, setSelectedEmojiText] = useState<string>(localStorage.getItem("emoji") || "");

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  const myEmoji = getEmojiSrc("me", selectedEmojiText);
  const partnerEmoji = getEmojiSrc("partner", "thumb");

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
      <FullpicHeader handleTrashBtn={handleTrashBtn} />
      <OneContainer name={"맹꽁이"} picSrc={fullPic} account="partner" />
      <EmojiTagContainer
        type="button"
        onClick={() => {
          if (setOpenEmojiDetail) {
            setOpenEmojiDetail(true);
          }
        }}>
        <EmojiTag font="fullPic">
          <EmojiIcon as={myEmoji} />
          <EmojiIcon as={partnerEmoji} />
        </EmojiTag>
      </EmojiTagContainer>
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
  width: 100%;
  padding: 15.38rem 1.42rem 2.1rem;
`;

const EmojiIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;
