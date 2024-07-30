import styled from "styled-components";
import { RewindIc } from "assets/index";

export default function RewindBtn() {
  return (
    <Wrapper>
      <TextContainer>
        <TitleText>
          Rewind
          <br />
          3days
        </TitleText>
      </TextContainer>
      <RewindIcon />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 7.6rem;
  height: 7.6rem;
  border-radius: 6px;
  background: linear-gradient(0deg, rgb(0 0 0 / 40%) 0%, rgb(0 0 0 / 40%) 100%),
    linear-gradient(180deg, #454c53 0%, #ffad1e 100%);
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 1.4rem 0.9rem 2.7rem;
`;

const TitleText = styled.h3`
  display: flex;
  ${({ theme }) => theme.fonts.Rewind};

  color: ${({ theme }) => theme.colors.white};
`;

const RewindIcon = styled(RewindIc)`
  position: absolute;
  top: 1.4rem;
  right: -1.326rem;
  width: 10.5468rem;
  height: 6.5948rem;
`;
