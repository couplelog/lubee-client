import styled from "styled-components";
import CommentBox from "./CommentBox";
import BlankImgBtn from "../../components/BlankImgBtn";
import blankImg from "@assets/image/blankImg.png";
import { ImagesDataTypes } from "@common/types/EmojisDataTypes";
import getIconSrc from "@common/utils/getIconSrc";

interface ContentContainerProps {
  imagesData: ImagesDataTypes[];
}

export default function ContentContainer(props: ContentContainerProps) {
  const { imagesData } = props;
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile1");

  const displayPics =
    imagesData.length < 5 ? [...imagesData.map((img) => img.imgSrc), blankImg] : imagesData.map((img) => img.imgSrc);

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} />
      </CommentsContainer>
      <PicBox>
        {displayPics.map((imgSrc, index) =>
          imgSrc === blankImg ? <BlankImgBtn key={index} /> : <img key={index} src={imgSrc} />,
        )}
      </PicBox>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const CommentsContainer = styled.span`
  display: flex;
  gap: 1.6rem;
`;

const PicBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  overflow: scroll;
  max-height: 35rem;
  scrollbar-width: none;
`;
