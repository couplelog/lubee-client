import styled from "styled-components";
import CommentBox from "../../components/CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { formatMonth, getServerDate, getTodayDate, getTodayMonth, getTodayYear } from "@common/utils/dateFormat";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import { useGetSpecificCalendar } from "home/hooks/useGetSpecificCalendar";
import TodayPicBox from "home/today/components/TodayPicBox";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";
import { useEffect, useState } from "react";

interface ContentContainerProps {
  date: string;
  isToday: boolean;
}

export default function ContentContainer(props: ContentContainerProps) {
  const { date, isToday } = props;

  /*커플정보에서 프로필 가져와서 출력*/
  const { data: CoupleInfo } = useGetCouplesInfo();
  const { response: coupleResponse } = CoupleInfo || {};
  const profile_first = coupleResponse?.profile_first || "";
  const profile_second = coupleResponse?.profile_second || "";

  const myProfile = getProfileIconSrc("me", profile_first);
  const partnerProfile = getProfileIconSrc("partner", profile_second);

  const urlDate = `${formatMonth(getTodayMonth)}${getTodayDate}`;
  const [specificDto, setSpecificDto] = useState<MemoryBaseDtoDataTypes[]>();
  const data = useGetSpecificCalendar({ year: getTodayYear, month: getTodayMonth, day: getTodayDate });

  useEffect(() => {
    // data바뀔때마다 상태 업데이트
    if (data) {
      setSpecificDto(data?.response.memoryBaseListDto);
    }
  }, [data]);

  /*코멘트 부분*/
  const finalServerDate = isToday ? getServerDate() : date; //오늘 홈에서 코멘트 조회 요청은 오늘날짜, 과거에서 코멘트 조회 요청은 선택한 날짜로
  const commentData = useGetTodayDateComment(finalServerDate);
  const { response } = commentData || {};
  const myComment = response?.comment_first || "";
  const partnerComment = response?.comment_second || "";

  // 데이터가 없을 경우 빈 화면을 반환
  if (!CoupleInfo) return <></>;

  return (
    <Container>
      <CommentsContainer>
        <CommentBox
          profileIconSrc={myProfile}
          isMyComment={true}
          isToday={true}
          comment={myComment}
          finalServerDate={finalServerDate}
        />
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
  min-height: 37rem;
`;

const CommentsContainer = styled.span`
  display: flex;
  gap: 1.6rem;
`;
