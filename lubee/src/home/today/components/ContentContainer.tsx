import styled from "styled-components";
import CommentBox from "../../components/CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { formatMonth, getServerDate, getTodayDate, getTodayMonth, getTodayYear } from "@common/utils/dateFormat";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import { useGetSpecificCalendar } from "home/hooks/useGetSpecificCalendar";
import TodayPicBox from "home/today/components/TodayPicBox";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";

interface ContentContainerProps {
  date: string;
  isToday: boolean;
}

export default function ContentContainer(props: ContentContainerProps) {
  const { date, isToday } = props;

  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");
  const urlDate = `${formatMonth(getTodayMonth)}${getTodayDate}`;

  let specificDto: MemoryBaseDtoDataTypes[] | undefined;

  const data = useGetSpecificCalendar({ year: getTodayYear, month: getTodayMonth, day: getTodayDate });
  specificDto = data?.response.memoryBaseListDto;

  /*혜연이 부분*/
  const finalServerDate = isToday ? getServerDate() : date; //오늘 홈에서 코멘트 조회 요청은 오늘날짜, 과거에서 코멘트 조회 요청은 선택한 날짜로
  const commentData = useGetTodayDateComment(1, finalServerDate); // coupleId는 임의로 1 넣음
  if (!commentData) return <></>;

  /* comment가 null일 경우 발생하는 에러를 위해서 기존 주석 코드 -> 주석 아래코드  */
  // const { response } = commentData;
  // const { mine, lover } = response;

  // const myComment = mine.content;
  // const partnerComment = lover?.content || "";

  const { response } = commentData;
  const { mine, lover } = response || {};

  const myComment = mine?.content || "";
  const partnerComment = lover?.content || "";

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} isToday={true} comment={myComment} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} isToday={true} comment={partnerComment} />
      </CommentsContainer>
      <TodayPicBox url={`/${urlDate}`} specificDto={specificDto} />
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
