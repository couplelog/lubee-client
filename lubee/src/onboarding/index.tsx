import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { LubeeCodeIc, CopyIc } from "@assets/index";
import { btnOnboardingStyle } from "@styles/btnStyle";
import Header from "./components/Header";
import TitleBox from "./components/TitleBox";
import NumberBox from "./components/NumberBox";
import CopyCodeModal from "./components/CopyCodeModal";

export default function index() {
  const navigate = useNavigate();
  const [openCopyCodeModal, setOpenCopyCodeModal] = useState<boolean>(false);

  function handleXBtn() {
    navigate("/login");
  }

  function handleInviteClick() {
    setOpenCopyCodeModal(true);
  }

  function handleCloseBtn() {
    setOpenCopyCodeModal(false);
  }

  return (
    <Wrapper>
      <Header handleXBtn={handleXBtn} showXIcon />
      <TitleBox titleText={`연인과 연결 후\n러비를 시작해보세요`} />
      <LubeeCodeIcon />
      <MyCodeContainer>
        <MyCodeText>나의 러비코드</MyCodeText>
        <BtnWrapper>
          <NumberBox>
            12345 67890
            <CopyIcon />
          </NumberBox>
        </BtnWrapper>
      </MyCodeContainer>
      <BtnBox>
        <InviteBtn onClick={handleInviteClick}>초대장 보내기</InviteBtn>
        <CodeInputBtn>연인의 러비코드 입력하기</CodeInputBtn>
      </BtnBox>
      {openCopyCodeModal && <CopyCodeModal handleCloseBtn={handleCloseBtn} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LubeeCodeIcon = styled(LubeeCodeIc)`
  width: 20.5rem;
  height: 12.7rem;
`;

const MyCodeText = styled.p`
  color: ${({ theme }) => theme.colors.yellow_600};
  text-align: center;
  ${({ theme }) => theme.fonts.Title_1};
`;

const BtnWrapper = styled.button`
  cursor: pointer;
`;

const MyCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  margin-top: 6.8rem;
`;

const CopyIcon = styled(CopyIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 14.5rem 0 1.4rem;
`;

const InviteBtn = styled.button`
  ${btnOnboardingStyle}

  background-color: ${({ theme }) => theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.gray_50};
  cursor: pointer;
`;

const CodeInputBtn = styled.button`
  ${btnOnboardingStyle}

  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme }) => theme.colors.yellow_600};
  cursor: pointer;
`;
