import styled from "styled-components";
import { imagesData } from "@common/core/imagesData";
import blankImg from "@assets/image/blankImg.png";
import BlankImgBtn from "home/components/BlankImgBtn";

export default function index() {
  /*이미지 개수가 5개 이하이면 이미지 추가하는 버튼 만들어주는 array*/
  const displayPics =
    imagesData.length < 5 ? [...imagesData.map((img) => img.imgSrc), blankImg] : imagesData.map((img) => img.imgSrc);

  return (
    <PicBox>
      {displayPics.map((imgSrc, date) =>
        imgSrc === blankImg ? <BlankImgBtn date={date} /> : <Image key={date} src={imgSrc} />,
      )}
    </PicBox>
  );
}

const PicBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  overflow: scroll;
  scrollbar-width: none;
`;

const Image = styled.img`
  width: 16.7rem;
  height: 16.7rem;
  padding: 0;
  border: none;
  border-radius: 20px;
  background: none;
`;
