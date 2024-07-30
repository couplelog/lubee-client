import { TitleBoxProps } from "@common/types/CommonTypes";
import styled from "styled-components";

export default function OnboardingTitleBox(props: TitleBoxProps) {
  const { titleText, subtitleText } = props;

  return (
    <Wrapper>
      <TitleText>{titleText}</TitleText>
      {subtitleText && <SubtitleText>{subtitleText}</SubtitleText>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  margin-top: 6rem;
  text-align: center;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Title_2};

  color: ${({ theme }) => theme.colors.gray_800};
  white-space: pre-line;
`;

const SubtitleText = styled.p`
  ${({ theme }) => theme.fonts.Caption_2};

  color: ${({ theme }) => theme.colors.gray_400};
`;
