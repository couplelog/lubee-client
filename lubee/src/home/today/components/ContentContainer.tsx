import { useState, useEffect } from "react";
import styled from "styled-components";
import CommentBox from "home/components/CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import HomePicBox from "home/components/HomePicBox";
import { useGetTodayDateComment } from "home/hooks/useGetTodayDateComment";
import { getAPIDate } from "@common/utils/dateFormat";

export default function ContentContainer() {
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");
  const { data } = useGetTodayDateComment(1, getAPIDate());
  const myComment = data?.mine?.content || "";
  const partnerComment = data?.lover?.content || "";

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} isToday={true} comment={myComment} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} isToday={true} comment={partnerComment} />
      </CommentsContainer>
      <HomePicBox url="/date/index" />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  min-height: 38.1rem;
`;

const CommentsContainer = styled.span`
  display: flex;
  gap: 1.6rem;
`;
