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

  function moveToHome() {
    // 헤더에서 전에 어떤 페이지였는지 불러오기
    const prevPage = localStorage.getItem("currentPage");

    if (prevPage === "today") {
      navigate("/home/today");
      console.log(prevPage);
    } else {
      navigate("/home/month");
      console.log(prevPage);
    }
  }

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
        <BtnWrapper type="button" onClick={moveToHome}>
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
  height: 100%;
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
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ShareBtnIcon = styled(ShareBtnIc)`
  width: 6.4rem;
  height: 6.4rem;
`;
