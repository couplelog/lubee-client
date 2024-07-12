import { ProfileIc } from "@assets/index";
import styled from "styled-components";

interface CommentInputBoxProps {
  profileIconSrc: string;
}

export default function CommentInputBox(props: CommentInputBoxProps) {
  const { profileIconSrc } = props;

  return (
    <Container>
      <ProfileIcon as={profileIconSrc} />
      <Text>오늘의 데이트는 어떠셨나요?</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
  height: 6.4rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.p`
  /* display: -webkit-box;
  overflow: hidden;
  width: 10.9rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  width: 10.9rem;
  color: ${({ theme }) => theme.colors.gray_400};
  ${({ theme }) => theme.fonts.Caption_2};
`;

const ProfileIcon = styled(ProfileIc)`
  width: 3rem;
  height: 3rem;
`;
