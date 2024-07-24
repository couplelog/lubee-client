import styled from "styled-components";
import CommentBox from "home/components/CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import HomePicBox from "home/components/HomePicBox";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";
import { getServerDate } from "@common/utils/dateFormat";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface ContentContainerProps {
  date: string;
  dayDto: MemoryBaseDtoDataTypes[];
  isToday: boolean;
}

export default function ContentContainer(props: ContentContainerProps) {
  const { date, dayDto, isToday } = props;
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");

  const finalServerDate = isToday ? getServerDate() : date; //오늘 홈에서 코멘트 조회 요청은 오늘날짜, 과거에서 코멘트 조회 요청은 선택한 날짜로
  const commentData = useGetTodayDateComment(1, finalServerDate); // coupleId는 임의로 1 넣음
  if (!commentData) return <></>;

  const { response } = commentData;
  const { mine, lover } = response;

  const myComment = mine.content;
  const partnerComment = lover?.content || "";

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} isToday={true} comment={myComment} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} isToday={true} comment={partnerComment} />
      </CommentsContainer>
      <HomePicBox url={`/${date}`} dayDto={dayDto} />
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