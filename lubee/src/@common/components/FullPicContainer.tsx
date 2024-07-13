import styled from "styled-components";
import { fullPicStyle } from "@styles/picStyle";
import LocationTag from "./LocationTag";

interface FullPicProps {
  picSrc: string;
  location: string;
  setOpenLocationModal?: (open: boolean) => void;
}

// React.Dispatch<React.SetStateAction<boolean>>

export default function FullPicContainer(props: FullPicProps) {
  const { picSrc, location, setOpenLocationModal } = props;

  return (
    <PicBox>
      <Pic src={picSrc}></Pic>
      <LocationTag location={location} setOpenLocationModal={setOpenLocationModal} font="fullPic" />
    </PicBox>
  );
}

const PicBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
  padding: 1.8rem 2rem 0;
`;

const Pic = styled.img`
  ${fullPicStyle};
`;
