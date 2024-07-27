import { ShortBorderIc } from "assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { useGetSpecificCalendar } from "home/hooks/useGetSpecificCalendar";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import MonthPicBox from "./MonthPicBox";
import CommentBox from "home/components/CommentBox";
import { getServerDate } from "@common/utils/dateFormat";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

interface DateDetailModalProps {
  dateText: string;
  showCalendar: boolean;
  urlDate: string;
  selectedDate?: number;
  year: number;
  month: number;
  serverDate: string;
}

const DateDetailModal = forwardRef<HTMLDivElement, DateDetailModalProps>((props, ref) => {
  const { dateText, showCalendar, urlDate, selectedDate, year, month, serverDate } = props;

  let specificDto: MemoryBaseDtoDataTypes[] | undefined;

  if (selectedDate !== undefined) {
    const response = useGetSpecificCalendar({ year: year, month: month, day: selectedDate });
    specificDto = response?.response.memoryBaseListDto;
  }
  console.log("specificDto", specificDto);

  /*커플 정보에서 프로필 가져와서 출력*/
  const CoupleInfo = useGetCouplesInfo();
  if (!CoupleInfo) return <></>;

  const {
    response: { profile_first, profile_second },
  } = CoupleInfo;

  const myProfile = getProfileIconSrc("me", profile_first);
  const partnerProfile = getProfileIconSrc("partner", profile_second);

  /*혜연이 부분*/
  const isToday = false;
  const finalServerDate = isToday ? getServerDate() : serverDate; //오늘 홈에서 코멘트 조회 요청은 오늘날짜, 과거에서 코멘트 조회 요청은 선택한 날짜로
  const commentData = useGetTodayDateComment(1, finalServerDate); // coupleId는 임의로 1 넣음
  if (!commentData) return <></>;
  const { response } = commentData;
  const { mine, lover } = response || {};

  const myComment = mine?.content || "";
  const partnerComment = lover?.content || "";

  return (
    <Background>
      <Container ref={ref} $showCalendar={showCalendar}>
        <Header>
          <ShortBorderIc />
          <Text>{dateText}</Text>
        </Header>
        <Contents>
          <CommentsContainer>
            <CommentBox profileIconSrc={myProfile} isMyComment={true} isToday={true} comment={myComment} />
            <CommentBox profileIconSrc={partnerProfile} isMyComment={false} isToday={true} comment={partnerComment} />
          </CommentsContainer>
          <HomePicBoxWrapper>
            <MonthPicBox
              url={`/${urlDate}`}
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

const CommentsContainer = styled.span`
  display: flex;
  gap: 1.6rem;
`;

const HomePicBoxWrapper = styled.div`
  display: flex;
`;
