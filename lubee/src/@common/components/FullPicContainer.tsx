import styled from "styled-components";
import { fullPicStyle } from "@styles/picStyle";
import LocationTag from "./LocationTag";
import { BtnWrapper } from "@styles/btnStyle";

interface FullPicProps {
  picSrc: string;
  location: string;
  setOpenLocationModal?: (open: boolean) => void;
}

// React.Dispatch<React.SetStateAction<boolean>>

export default function FullPicContainer(props: FullPicProps) {
  const { picSrc, location, setOpenLocationModal } = props;
  console.log(picSrc);
  return (
    <PicBox>
      <Pic src={picSrc} alt="업로드한 이미지"></Pic>
      <BtnWrapper
        type="button"
        onClick={() => {
          if (setOpenLocationModal) {
            setOpenLocationModal(true);
          }
        }}>
        <LocationTag location={location} font="fullPic" />
      </BtnWrapper>
    </PicBox>
  );
}

const PicBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
  padding: 1.8rem 0 0;
`;

const Pic = styled.img`
  ${fullPicStyle};
`;
