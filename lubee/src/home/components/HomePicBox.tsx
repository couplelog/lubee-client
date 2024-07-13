import styled from "styled-components";
import BlankImgBtn from "home/components/BlankImgBtn";
import blankImg from "@assets/image/blankImg.png";
import getIconSrc from "@common/utils/getIconSrc";
import LocationTag from "@common/components/LocationTag";
import EmojiTag from "@common/components/EmojiTag";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import { useNavigate } from "react-router-dom";
import { fullPicData } from "@common/core/fullPicData";

interface HomePicBoxProps {
  url: string;
}

export default function HomePicBox(props: HomePicBoxProps) {
  const navigate = useNavigate();
  const { url } = props;

  /*이미지 개수가 5개 이하이면 이미지 추가하는 버튼 만들어주는 array*/
  const displayPics =
    fullPicData.length < 5 ? [...fullPicData.map((img) => img.picSrc), blankImg] : fullPicData.map((img) => img.picSrc);

  /*프로필 아이콘*/
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile2");

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  const myEmoji = getEmojiSrc("me", "heart");
  const partnerEmoji = getEmojiSrc("partner", "thumb");

  return (
    <Container>
      {displayPics.map((imgSrc, date) =>
        imgSrc === blankImg ? (
          <BlankImgBtn date={date} />
        ) : (
          <ImgContainer
            key={date}
            type="button"
            onClick={() => {
              navigate(`/fullpic${url}`);
            }}>
            <Image src={imgSrc} />
            <ProfileIcon as={myProfile} />
            <TagContainer>
              <LocationTag location="청수당공명" font="smallPic" />
              <EmojiTag font="smallPic">
                <EmojiIcon as={myEmoji} />
                <EmojiIcon as={partnerEmoji} />
              </EmojiTag>
            </TagContainer>
          </ImgContainer>
        ),
      )}
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  overflow: scroll;
  max-height: 38rem;
  scrollbar-width: none;
`;

const ImgContainer = styled.button`
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
  display: flex;
  gap: 0.4rem;
  position: absolute;
  bottom: 1.2rem;
  left: 1.21rem;
  padding: 0;
  border: none;
  background: none;
`;

const EmojiIcon = styled.svg`
  width: 1.6rem;
  height: 1.6rem;
`;
