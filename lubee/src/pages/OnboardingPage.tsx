import styled from "styled-components";
import { XIc, LubeeCodeIc, CopyIc } from "@assets/index";
import { flexCenter } from "styles/globalStyle";
import { BtnOnboarding } from "@styles/BtnStyle";

export default function OnboardingPage() {
  return (
    <Wrapper>
      <XIcon />
      <InformText>
        연인과 연결 후<br />
        러비를 시작해보세요
      </InformText>
      <LubeeCodeIcon />
      <CodeTitleText>나의 러비코드</CodeTitleText>
      <CodeCopyBtn>
        12345 67890
        <CopyIcon />
      </CodeCopyBtn>
      <InviteBtn>초대장 보내기</InviteBtn>
      <CodeInputBtn>연인의 러비코드 입력하기</CodeInputBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const XIcon = styled(XIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const InformText = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.Title_2};
`;

const CodeTitleText = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.Title_1};
`;

const LubeeCodeIcon = styled(LubeeCodeIc)`
  width: 20.5rem;
  height: 12.7rem;
`;

const CodeCopyBtn = styled.button`
  ${flexCenter}

  padding: 5px 10px;
  border-radius: 5px;

  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme }) => theme.colors.yellow_600};
  cursor: pointer;
`;

const CopyIcon = styled(CopyIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const InviteBtn = styled(BtnOnboarding)`
  background-color: ${({ theme }) => theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.gray_50};
  cursor: pointer;
`;

const CodeInputBtn = styled(BtnOnboarding)`
  margin-bottom: 1.4rem;
  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme }) => theme.colors.yellow_600};
  cursor: pointer;
`;
