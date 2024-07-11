import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";
import blankImg from "@assets/image/blankImg.png";
import { ImagesDataTypes } from "@common/types/EmojisDataTypes";

interface ContentContainerProps {
  iconSrc: string;
  imagesData: ImagesDataTypes[];
}

export default function ContentContainer(props: ContentContainerProps) {
  const { iconSrc, imagesData } = props;

  const displayImages =
    imagesData.length < 5 ? [...imagesData.map((img) => img.imgSrc), blankImg] : imagesData.map((img) => img.imgSrc);

  return (
    <Container>
      <CommentsContainer>
        <CommentInputBox iconSrc={iconSrc} />
        <CommentInputBox iconSrc={iconSrc} />
      </CommentsContainer>
      <PicBox>
        {displayImages.map((imgSrc, index) =>
          imgSrc === blankImg ? (
            <BlankImgBtn type="button" key={index}>
              <img src={imgSrc} />
            </BlankImgBtn>
          ) : (
            <img key={index} src={imgSrc} />
          ),
        )}
      </PicBox>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;s
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

const BlankImgBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
`;
