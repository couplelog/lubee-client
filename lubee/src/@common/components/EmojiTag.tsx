import styled from "styled-components";

interface EmojiTagProps {
  setOpenEmojiDetail?: (open: boolean) => void;
  font: string;
  children?: React.ReactNode;
}

export default function EmojiTag(props: EmojiTagProps) {
  const { setOpenEmojiDetail, font, children } = props;
  return (
    <Container
      type="button"
      onClick={() => {
        if (setOpenEmojiDetail) {
          setOpenEmojiDetail(true);
        }
      }}
      $font={font}>
      {children}
    </Container>
  );
}

const Container = styled.button<{ $font: string }>`
  display: flex;
  gap: ${(props) => (props.$font === "fullPic" ? "0.4rem" : "0")};
  padding: ${(props) => (props.$font === "fullPic" ? "0.6rem 1.2rem" : "0.2rem 0.5rem")};
  border-radius: 31px;
  background-color: ${({ theme }) => theme.colors.white};
`;
