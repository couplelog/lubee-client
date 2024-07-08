import styled from "styled-components";

interface TitleBoxProps {
  titleText: string;
  subtitleText?: string;
}

export default function TitleBox(props: TitleBoxProps) {
  const { titleText, subtitleText } = props;

  return (
    <Wrapper>
      <Text>
        <h2>{titleText}</h2>
        {subtitleText && <p>{subtitleText}</p>}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 6rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: center;

  & > h2 {
    ${({ theme }) => theme.fonts.Title_2};

    color: ${({ theme }) => theme.colors.gray_800};
    white-space: pre-line;
  }

  & > p {
    ${({ theme }) => theme.fonts.Caption_2};

    color: ${({ theme }) => theme.colors.gray_400};
  }
`;
