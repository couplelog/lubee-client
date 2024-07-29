import styled from "styled-components";
import { BackIc, ShareBtnIc } from "assets/index";
import FullPicContainer from "@common/components/FullPicContainer";
import { useState } from "react";
import SelectLocationModal from "upload/components/SelectLocationModal";
import { BtnWrapper } from "@styles/btnStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { usePostUploadPic } from "upload/hooks/usePostUploadPic";

interface UploadProps {
  location: string;
  setLocation: (location: string) => void;
  moveToUploadLocation: () => void;
  searchInput: string;
  setSearchInput: (input: string) => void;
  setUploadPic: (uploadPic: boolean) => void;
  locationId: number;
  setLocationId: (locationId: number) => void;
}

export default function index(props: UploadProps) {
  const {
    location,
    setLocation,
    moveToUploadLocation,
    searchInput,
    setSearchInput,
    setUploadPic,
    locationId,
    setLocationId,
  } = props;
  const navigate = useNavigate();
  const [openLocationModal, setOpenLocationModal] = useState<boolean>(false);

  const locationState = useLocation();
  const picSrc = locationState.state?.picSrc as File; // 업로드한 이미지 src
  const uploadYear = locationState.state.year;
  const uploadMonth = locationState.state.month;
  const uploadDay = locationState.state.day;

  console.log(openLocationModal);
  const { mutate: postUploadPic } = usePostUploadPic();

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
      <FullPicContainer
        picSrc={URL.createObjectURL(picSrc)}
        location={location}
        setOpenLocationModal={setOpenLocationModal}
      />
      <Footer>
        <BtnWrapper
          type="button"
          onClick={() => {
            postUploadPic({
              picture: picSrc,
              location_id: locationId,
              year: uploadYear,
              month: uploadMonth,
              day: uploadDay,
            });
            setUploadPic(false); // uploadPic 리셋
            navigate("/loading");
          }}>
          <ShareBtnIcon />
        </BtnWrapper>
      </Footer>
      {openLocationModal && (
        <SelectLocationModal
          setOpenLocationModal={setOpenLocationModal}
          setLocation={setLocation}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setLocationId={setLocationId}
        />
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
  padding: 2rem 2rem 8rem;
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
