import styled from "styled-components";
import MypageBlankImgBtn from "./MypageBlankImgBtn";
import album1Img from "@assets/image/album1Img.png";
import album2Img from "@assets/image/album2Img.png";

export default function AlbumsContainer() {
  return (
    <Wrapper>
      <AlbumContainer>
        <MypageBlankImgBtn />
        <TextContainer>
          <TitleText>새 앨범</TitleText>
        </TextContainer>
      </AlbumContainer>
      <AlbumContainer>
        <Image src={album1Img} />
        <TextContainer>
          <TitleText>여행 모음</TitleText>
          <SubtitleText>3일 전 업데이트</SubtitleText>
        </TextContainer>
      </AlbumContainer>
      <AlbumContainer>
        <Image src={album2Img} />
        <TextContainer>
          <TitleText>달달한 하루들</TitleText>
          <SubtitleText>6일 전 업데이트</SubtitleText>
        </TextContainer>
      </AlbumContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 1.6rem;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
`;

const AlbumContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: fit-content;
  text-align: left;
`;

const Image = styled.img`
  width: 16.7rem;
  height: 16.7rem;
  padding: 0;
  border: none;
  background: none;
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const TitleText = styled.h3`
  ${({ theme }) => theme.fonts.Body_2};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const SubtitleText = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};

  color: ${({ theme }) => theme.colors.gray_500};
`;
