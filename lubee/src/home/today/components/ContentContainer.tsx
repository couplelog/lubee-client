import styled from "styled-components";
import CommentBox from "home/components/CommentBox";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import HomePicBox from "home/components/HomePicBox";

export default function ContentContainer() {
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile1");

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} isToday={true} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} isToday={true} />
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
