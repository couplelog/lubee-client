import styled from "styled-components";

interface EmojiTagProps {
  font: string;
  children?: React.ReactNode;
}

export default function EmojiTag(props: EmojiTagProps) {
  const { font, children } = props;
  return children ? <Container $font={font}>{children}</Container> : null;
}

const Container = styled.div<{ $font: string }>`
  display: flex;
  gap: ${(props) => (props.$font === "fullPic" ? "0.4rem" : "0")};
  width: auto;
  padding: ${(props) => (props.$font === "fullPic" ? "0.6rem 1.2rem" : "0.2rem 0.5rem")};
  border-radius: 31px;
  background-color: ${({ theme }) => theme.colors.white};
`;
