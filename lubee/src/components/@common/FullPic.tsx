import styled from "styled-components";
import { FullPicStyle } from "@styles/@common/commonPic";
import Location from "./Location";

interface FullPicProps {
  picSrc: string;
  location: string;
  setOpenLocationModal?: (open: boolean) => void;
}

// React.Dispatch<React.SetStateAction<boolean>>

export default function FullPic(props: FullPicProps) {
  const { picSrc, location, setOpenLocationModal } = props;

  return (
    <PicBox>
      <Pic src={picSrc}></Pic>
      <Location location={location} setOpenLocationModal={setOpenLocationModal} />
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
  ${FullPicStyle};
`;
