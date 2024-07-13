import styled from "styled-components";
import CommentBox from "./CommentBox";
import getIconSrc from "@common/utils/getIconSrc";
import HomePicBox from "home/components/HomePicBox";

export default function ContentContainer() {
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile1");

  return (
    <Container>
      <CommentsContainer>
        <CommentBox profileIconSrc={myProfile} isMyComment={true} />
        <CommentBox profileIconSrc={partnerProfile} isMyComment={false} partnerComment={"ddddd"} />
      </CommentsContainer>
      <HomePicBox url="/date/index" />
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
