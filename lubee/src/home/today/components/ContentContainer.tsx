import styled from "styled-components";
import CommentBox from "home/components/CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import HomePicBox from "home/components/HomePicBox";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";
import { getAPIDate } from "@common/utils/dateFormat";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface ContentContainerProps {
  date: string;
  dayDto: MemoryBaseDtoDataTypes[];
}

export default function ContentContainer(props: ContentContainerProps) {
  const { date, dayDto } = props;
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");
  const { data } = useGetTodayDateComment(1, getAPIDate()); // coupleId는 임의로 1 넣음
  const myComment = data?.mine?.content || "";
  const partnerComment = data?.lover?.content || "";

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
  min-height: 37rem;
`;

const CommentsContainer = styled.span`
  display: flex;
  gap: 1.6rem;
`;
