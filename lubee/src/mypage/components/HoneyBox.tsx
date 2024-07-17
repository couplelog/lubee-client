import styled from "styled-components";
import { HoneyYellowIc, PlayIc } from "@assets/index";
import RewindBtn from "./RewindBtn";

interface HoneyBoxProps {
  count: number;
}

export default function HoneyBox(props: HoneyBoxProps) {
  const { count } = props;
  const total = 50;
  const percentage = (count / total) * 100;

  return (
    <Container>
      <HoneyContainer>
        <TitleContainer>
          <HoneyYellowIcon />
          <TitleText>전체 꿀 {count}개</TitleText>
          <SubtitleText>리와인드까지 25개</SubtitleText>
        </TitleContainer>
        <ProgressContainer>
          <ProgressBarContainer>
            <ProgressBar style={{ width: `${percentage}%` }} />
          </ProgressBarContainer>
          <PlayIcon />
          <TextContainer>
            <CountText $count={true} $percentage={percentage}>
              {count}
            </CountText>
            <CountText $count={false}>50</CountText>
          </TextContainer>
        </ProgressContainer>
      </HoneyContainer>
      <RewindBtn />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 0.882rem;
`;

const HoneyContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 26.5rem;
  height: 7.6rem;
  padding: 1.1rem 1.2rem 0.6rem;
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

const ProgressContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
`;

const ProgressBarContainer = styled.div`
  width: 23.3rem;
  height: 0.8rem;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;

const ProgressBar = styled.div`
  height: 0.8rem;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const PlayIcon = styled(PlayIc)`
  position: absolute;
  top: 10%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 1.6rem;
  height: 1.6rem;
`;

const TextContainer = styled.section`
  display: flex;
`;

const CountText = styled.p<{ $count: boolean; $percentage?: number }>`
  display: flex;

  ${({ theme }) => theme.fonts.Caption_1};

  margin-left: ${({ $count, $percentage }) => ($count ? `${$percentage}%` : "auto")};
  transform: translateX(-50%);
  color: ${({ theme, $count }) => ($count ? theme.colors.yellow_600 : theme.colors.gray_400)};
  text-align: center;
`;
