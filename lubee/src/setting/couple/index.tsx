import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";
import YellowBox from "onboarding/components/YellowBox";
import ConfirmModal from "../components/ConfirmModal";
import { CopyIc } from "assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { useGetCouplesBreak } from "setting/hooks/useGetCouplesBreak";

interface CoupleProps {
  moveToOnboardingConnect?: () => void;
}

export default function index(props: CoupleProps) {
  const { moveToOnboardingConnect } = props;
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const couplesBreakData = useGetCouplesBreak();

  function handleBackBtn() {
    navigate("/setting/account");
  }

  function handleConfirmBtn() {
    if (!couplesBreakData) return <></>;

    if (couplesBreakData?.success === true) {
      if (moveToOnboardingConnect) {
        moveToOnboardingConnect(); // 성공 시 러비코드 복사 페이지로 이동
      }
    }
  }

  function handleCloseBtn() {
    setModalOpen(false);
    navigate("/setting/account");
  }

  return (
    <Wrapper>
      <SettingHeader handleBackBtn={handleBackBtn} title="커플 연결" />
      <ContentContainer>
        <MyCodeContainer>
          <MyCodeText>나의 러비코드</MyCodeText>
          <YellowBox $disabled={false}>
            ALREADY_COUPLE
            <CopyIcon />
          </YellowBox>
        </MyCodeContainer>
        <BtnWrapper
          type="button"
          onClick={() => {
            setModalOpen(true);
          }}>
          <CutCoupleText>커플 연결 끊기</CutCoupleText>
        </BtnWrapper>
      </ContentContainer>
      {isModalOpen && (
        <ConfirmModal
          handleConfirmBtn={handleConfirmBtn}
          handleCloseBtn={handleCloseBtn}
          titleText="커플 연결을 끊으시겠어요?"
          subtitleText="영구적으로 기록이 삭제됩니다"
          btnText="연결 끊기"
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 22.9rem;
  padding-bottom: 1.4rem;
`;

const MyCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const MyCodeText = styled.p`
  color: ${({ theme }) => theme.colors.yellow_600};
  text-align: center;
  ${({ theme }) => theme.fonts.Title_1};
`;

const CopyIcon = styled(CopyIc)`
  width: 1.6rem;
  height: 1.6rem;
  vertical-align: middle;
`;

const CutCoupleText = styled.p`
  color: ${({ theme }) => theme.colors.gray_800};

  ${({ theme }) => theme.fonts.Caption_2};

  text-decoration-line: underline;
`;
