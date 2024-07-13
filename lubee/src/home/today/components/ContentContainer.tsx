import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";
import getIconSrc from "@common/utils/getIconSrc";
import HomePicBox from "home/components/HomePicBox";

export default function ContentContainer() {
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile1");

  return (
    <Container>
      <CommentsContainer>
        <CommentInputBox profileIconSrc={myProfile} />
        <CommentInputBox profileIconSrc={partnerProfile} />
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
