import styled from "styled-components";

interface TitleBoxProps {
  titleText: string;
  subtitleText?: string;
}

export default function TitleBox(props: TitleBoxProps) {
  const { titleText, subtitleText } = props;

  return (
    <Wrapper>
      <Title>{titleText}</Title>
      {subtitleText && <SubTitle>{subtitleText}</SubTitle>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin: 4rem 0 6rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray_800};
  text-align: center;
  ${({ theme }) => theme.fonts.Title_2};

  white-space: pre-line;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray_400};
  text-align: center;
  ${({ theme }) => theme.fonts.Caption_2};
`;
