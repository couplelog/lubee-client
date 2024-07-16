import styled from "styled-components";
import { HoneyYellowIc, PlayIc } from "@assets/index";

interface HoneyBoxProps {
  count: number;
}

export default function HoneyBox(props: HoneyBoxProps) {
  const { count } = props;

  return (
    <Container>
      <TitleContainer>
        <HoneyYellowIcon />
        <TitleText>전체 꿀 {count}개</TitleText>
        <SubtitleText>리와인드까지 25개</SubtitleText>
      </TitleContainer>
      <PlayIcon />
      <CountText $count={false}>50</CountText>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7.6rem;
  padding: 1.1rem 1.3rem 0.5rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 4.412px 0 rgb(171 176 188 / 30%);
`;

const TitleContainer = styled.section`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
`;

const HoneyYellowIcon = styled(HoneyYellowIc)`
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  margin: 0.2rem 0;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Caption_2};

  color: ${({ theme }) => theme.colors.gray_700};
`;

const SubtitleText = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};

  color: ${({ theme }) => theme.colors.gray_500};
`;

const PlayIcon = styled(PlayIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const CountText = styled.p<{ $count: boolean }>`
  ${({ theme }) => theme.fonts.Caption_1};

  color: ${({ theme, $count }) => ($count === true ? theme.colors.yellow_600 : theme.colors.gray_400)};
`;
