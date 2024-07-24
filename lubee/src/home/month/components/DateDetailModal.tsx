import { ShortBorderIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import Comment from "./Comment";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { useGetSpecificCalendar } from "home/hooks/useGetSpecificCalendar";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import MonthPicBox from "./MonthPicBox";
import { useLocation } from "react-router-dom";

interface DateDetailModalProps {
  dateText: string;
  showCalendar: boolean;
  date: string;
  selectedDate?: number;
  year: number;
  month: number;
}

const DateDetailModal = forwardRef<HTMLDivElement, DateDetailModalProps>((props, ref) => {
  const { dateText, showCalendar, date, selectedDate, year, month } = props;

  let specificDto: MemoryBaseDtoDataTypes[] | undefined;

  if (selectedDate !== undefined) {
    const response = useGetSpecificCalendar({ year: year, month: month, day: selectedDate });
    specificDto = response?.response.memoryBaseListDto;
  }
  console.log("specificDto", specificDto);

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
          <Text>{dateText}</Text>
        </Header>
        <Contents>
          <CommentsBox>
            <Comment iconSrc={myProfile} comment={myComment} />
            <Comment iconSrc={partnerProfile} comment={partnerComment} />
          </CommentsBox>
          <HomePicBoxWrapper>
            <MonthPicBox
              url={`/${date}`}
              specificDto={specificDto}
              year={year}
              month={month}
              selectedDate={selectedDate}
            />
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
