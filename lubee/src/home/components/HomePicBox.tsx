import styled from "styled-components";
import { imagesData } from "@common/core/imagesData";
import BlankImgBtn from "home/components/BlankImgBtn";
import blankImg from "@assets/image/blankImg.png";
import getIconSrc from "@common/utils/getIconSrc";
import LocationTag from "@common/components/LocationTag";

export default function HomePicBox() {
  /*이미지 개수가 5개 이하이면 이미지 추가하는 버튼 만들어주는 array*/
  const displayPics =
    imagesData.length < 5 ? [...imagesData.map((img) => img.imgSrc), blankImg] : imagesData.map((img) => img.imgSrc);

  /*프로필 아이콘*/
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile2");

  return (
    <Container>
      {displayPics.map((imgSrc, date) =>
        imgSrc === blankImg ? (
          <BlankImgBtn date={date} />
        ) : (
          <ImgContainer key={date}>
            <Image src={imgSrc} />
            <ProfileIcon as={myProfile} />
            <TagContainer>
              <LocationTag location="어디까지 길어지나" font="smallPic" />
            </TagContainer>
          </ImgContainer>
        ),
      )}
    </Container>
  );
}

{
  /* <ImageWrapper key={date} src={imgSrc} /> */
}
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  overflow: scroll;
  max-height: 38rem;
  scrollbar-width: none;
`;

const ImgContainer = styled.div`
  position: relative;
  padding: 0;
  border: none;
  background: none;
`;

const Image = styled.img`
  width: 16.7rem;
  height: 16.7rem;
  padding: 0;
  border: none;
  background: none;
`;

const ProfileIcon = styled.svg`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  width: 3rem;
  height: 3rem;
`;

const TagContainer = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 1.21rem;
  padding: 0;
  border: none;
  background: none;
`;
