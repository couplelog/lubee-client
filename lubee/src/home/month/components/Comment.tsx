import styled from "styled-components";
import { useState } from "react";

interface CommentProps {
  iconSrc: string;
}

export default function Comment(props: CommentProps) {
  const { iconSrc } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container onClick={toggleExpand}>
      <ProfileIcon as={iconSrc} />
      <Text $isExpanded={isExpanded}>
        오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자. 오 드디어 100일이다 너무 신나!! 앞으로도 잘지내자.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  cursor: pointer;
`;

const Text = styled.p<{ $isExpanded: boolean }>`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${(props) => (props.$isExpanded ? "unset" : "3")};
  -webkit-box-orient: vertical;
  width: 10.9rem;
  color: ${({ theme }) => theme.colors.gray_700};
  ${({ theme }) => theme.fonts.Caption_2};
`;

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;
