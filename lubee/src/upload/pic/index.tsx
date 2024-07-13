import styled from "styled-components";
import { BackIc, ShareBtnIc } from "@assets/index";
import fullPic from "@assets/image/fullPic.png";
import FullPicContainer from "@common/components/FullPicContainer";
import { useState } from "react";
import SelectLocationModal from "upload/components/SelectLocationModal";
import { BtnWrapper } from "@styles/btnStyle";
import { useNavigate } from "react-router-dom";
interface UploadProps {
  // picSrc: string;
  location: string;
  setLocation: (location: string) => void;
  moveToUploadLocation: () => void;
}

export default function index(props: UploadProps) {
  const { location, setLocation, moveToUploadLocation } = props;
  const navigate = useNavigate();
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <Header>
        <BtnWrapper
          type="button"
          onClick={() => {
            moveToUploadLocation();
          }}>
          <BackIcon />
        </BtnWrapper>
      </Header>
      <FullPicContainer picSrc={fullPic} location={location} setOpenLocationModal={setOpenLocationModal} />
      <Footer>
        <BtnWrapper type="button" onClick={() => navigate("/home/today")}>
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

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10rem 0 0.6rem;
`;

const ShareBtnIcon = styled(ShareBtnIc)`
  width: 6.4rem;
  height: 6.4rem;
`;
