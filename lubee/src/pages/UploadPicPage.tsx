import styled from "styled-components";
import { BackIc, ShareBtnIc } from "@assets/index";
import fullPic from "@assets/image/fullPic.png";
import FullPic from "@components/@common/FullPic";
import { useState } from "react";
import SelectLocationModal from "@components/SelectLocationModal";

export default function UploadPicPage() {
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  return (
    <Wrapper>
      <Header>
        <BtnWrapper type="button">
          <BackIcon />
        </BtnWrapper>
      </Header>
      <FullPic picSrc={fullPic} location={location} setOpenLocationModal={setOpenLocationModal} />
      <Footer>
        <BtnWrapper type="button">
          <ShareBtnIcon />
        </BtnWrapper>
      </Footer>
      {openLocationModal && (
        <SelectLocationModal setOpenLocationModal={setOpenLocationModal} setLocation={setLocation} />
      )}
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

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 2rem 10.9rem;
`;

const BackIcon = styled(BackIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 14.2rem 0 0.6rem;
`;

const ShareBtnIcon = styled(ShareBtnIc)`
  width: 6.4rem;
  height: 6.4rem;
`;
