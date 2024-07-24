import styled from "styled-components";
import CommentBox from "./CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { formatMonth, getTodayDate, getTodayMonth, getTodayYear } from "@common/utils/dateFormat";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import { useGetSpecificCalendar } from "home/hooks/useGetSpecificCalendar";
import TodayPicBox from "home/today/components/TodayPicBox";

export default function ContentContainer() {
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");
  const date = `${formatMonth(getTodayMonth)}${getTodayDate}`;

  let specificDto: MemoryBaseDtoDataTypes[] | undefined;

  const response = useGetSpecificCalendar({ year: getTodayYear, month: getTodayMonth, day: getTodayDate });
  specificDto = response?.response.memoryBaseListDto;

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} />
      </CommentsContainer>
      <TodayPicBox url={`/${date}`} specificDto={specificDto} />
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
