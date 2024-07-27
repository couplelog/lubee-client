import styled from "styled-components";
import collectImg from "assets/image/collectImg.png";
import collect2Img from "assets/image/collect2Img.png";
import collect3Img from "assets/image/collect3Img.png";

export default function AlbumContainer() {
  return (
    <Wrapper>
      <Image src={collectImg} />
      <Image src={collect2Img} />
      <Image src={collect3Img} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 1.6rem;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
`;

const Image = styled.img`
  width: 16.7rem;
  height: 16.7rem;
  padding: 0;
  border: none;
  background: none;
`;
