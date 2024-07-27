import styled from "styled-components";
import { BannerIc, NextIc } from "assets/index";

export default function Banner() {
  return (
    <Container>
      <TitleContainer>
        <TitleText>러비 프리미엄 보러가기</TitleText>
        <NextIcon />
      </TitleContainer>
      <SubtitleText>러비의 모든 기능을 이용할 수 있어요</SubtitleText>
      <BannerIcon />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  padding: 1rem 0.8rem 1rem 1.6rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.yellow_50};
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body_2};

  color: ${({ theme }) => theme.colors.yellow_600};
`;

const SubtitleText = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};

  color: ${({ theme }) => theme.colors.yellow_600};
`;

const NextIcon = styled(NextIc)`
  width: 1.2rem;
  height: 1.2rem;
`;

const BannerIcon = styled(BannerIc)`
  position: absolute;
  top: -0.6rem;
  right: 1.0301rem;
  bottom: -5.652rem;
  width: 16.4699rem;
  height: 11.852rem;
`;
