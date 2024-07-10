import { ProfileIc } from "@assets/index";
import styled from "styled-components";
interface CommentProps {
  iconSrc: string;
}

export default function Comment(props: CommentProps) {
  const { iconSrc } = props;

  return (
    <Container>
      <ProfileIcon />
      <Text>
        오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자.오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자.오 드디어
        100일이다 너무 신나!! 앞으로도 잘지내자.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
  overflow: scroll;
  max-height: 6rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  scrollbar-width: none;
`;

const Text = styled.p`
  /* display: -webkit-box;
  overflow: hidden;
  width: 10.9rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  width: 10.9rem;
  color: ${({ theme }) => theme.colors.gray_700};
  ${({ theme }) => theme.fonts.Caption_2};
`;

const ProfileIcon = styled(ProfileIc)`
  width: 3rem;
  height: 3rem;
`;
