import { ShortBorderIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import Comment from "./Comment";
import { ImagesDataTypes } from "@common/types/EmojisDataTypes";
import getIconSrc from "@common/utils/getIconSrc";
import HomePicBox from "home/components/HomePicBox";

interface DateDetailModalProps {
  date: string;
  iconSrc: string;
  imagesData: ImagesDataTypes[];
}

const DateDetailModal = forwardRef<HTMLDivElement, DateDetailModalProps>((props, ref) => {
  const { date } = props;

  /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile2");

  const myComment =
    "오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자. 오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자.";
  const partnerComment = "comment";

  return (
    <Background>
      <Container ref={ref}>
        <Header>
          <ShortBorderIc />
          <Text>{date}</Text>
        </Header>
        <Contents>
          <CommentsBox>
            <Comment iconSrc={myProfile} comment={myComment} />
            <Comment iconSrc={partnerProfile} comment={partnerComment} />
          </CommentsBox>
          <HomePicBox />
        </Contents>
      </Container>
    </Background>
  );
});

export default DateDetailModal;

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_800};
  ${({ theme }) => theme.fonts.Title_1};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 2rem 2rem;
`;

const CommentsBox = styled.span`
  display: flex;
  gap: 1.6rem;
`;
