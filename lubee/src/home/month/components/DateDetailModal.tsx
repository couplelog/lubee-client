import { ShortBorderIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import Comment from "./Comment";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import HomePicBox from "home/components/HomePicBox";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface DateDetailModalProps {
  date: string;
  showCalendar: boolean;
  dayDto: MemoryBaseDtoDataTypes[];
}

const DateDetailModal = forwardRef<HTMLDivElement, DateDetailModalProps>((props, ref) => {
  const { date, showCalendar, dayDto } = props;

  /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile2");

  const myComment =
    "오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자. 오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자.";
  const partnerComment = "Comment";

  return (
    <Background>
      <Container ref={ref} $showCalendar={showCalendar}>
        <Header>
          <ShortBorderIc />
          <Text>{date}</Text>
        </Header>
        <Contents>
          <CommentsBox>
            <Comment iconSrc={myProfile} comment={myComment} />
            <Comment iconSrc={partnerProfile} comment={partnerComment} />
            {dayDto.map((memory) => (
              <Comment key={memory.memory_id} iconSrc={memory.writer_profile} comment={memory.reaction1} />
            ))}
          </CommentsBox>
          <HomePicBoxWrapper>
            <HomePicBox url="/date" />
          </HomePicBoxWrapper>
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

const Container = styled.section<{ $showCalendar: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: ${(props) => (props.$showCalendar ? "none" : "absolute")};
  bottom: 0;
  max-height: 49rem;
  background-color: ${({ theme }) => theme.colors.white};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
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

const HomePicBoxWrapper = styled.div`
  display: flex;
`;
