import styled from "styled-components";
import Header from "@components/fullPic/Header";
import Contents from "@components/fullPic/Contents";
import fullPic from "@assets/image/fullPic.png";
import EmojiBar from "@components/@common/EmojiBar";
import { MintHeartIc, YellowHeartIc } from "@assets/index";
import { useState, useRef, useEffect } from "react";
import EmojiDetailModal from "@components/fullPic/EmojiDetailModal";
import DeletePicModal from "@components/fullPic/DeletePicModal";

export default function FullPicPage() {
  const [show, setShow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const selectedEmojiText = localStorage.getItem("emoji");

  function openTrash(open: boolean) {
    setOpen(open);
  }
  const modalRef = useRef<HTMLDivElement>(null); // Correctly type the ref

  function showDetails(show: boolean) {
    setShow(show);
  }

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!modalRef.current || modalRef.current.contains(e.target as Node)) return;
      setShow(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [modalRef]);

  return (
    <Wrapper>
      <Header openTrash={openTrash} />
      <Contents name={"맹꽁이"} picSrc={fullPic} />
      <SelectedEmoji
        type="button"
        onClick={() => {
          showDetails(true);
        }}>
        <YellowHeartIcon />
        <MintHeartIcon />
      </SelectedEmoji>
      <Footer>
        <EmojiBar />
      </Footer>
      {open && <DeletePicModal openTrash={openTrash} />}
      {show && <EmojiDetailModal ref={modalRef} />}
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

const SelectedEmoji = styled.button`
  display: flex;
  gap: 0.4rem;
  position: absolute;
  top: 45rem;
  left: 4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 31px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const YellowHeartIcon = styled(YellowHeartIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const MintHeartIcon = styled(MintHeartIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15.38rem 1.42rem 2.1rem;
`;
