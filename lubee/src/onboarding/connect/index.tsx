import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { LubeeCodeIc, CopyIc } from "assets/index";
import { btnOnboardingStyle } from "@styles/btnStyle";
import { BtnWrapper } from "@styles/btnStyle";
import OnboardingHeader from "../components/OnboardingHeader";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import YellowBox from "../components/YellowBox";
import CopyCodeModal from "../components/CopyCodeModal";
import { useGetLubeeCode } from "onboarding/hooks/useGetLubeeCode";
import { errorToast } from "@common/utils/toast";

interface ConnectProps {
  moveToOnboardingCode: () => void;
  moveToOnboardingCustom: () => void;
}

export default function index(props: ConnectProps) {
  const { moveToOnboardingCode, moveToOnboardingCustom } = props;
  const navigate = useNavigate();
  const [openCopyCodeModal, setOpenCopyCodeModal] = useState<boolean>(false);
  const [lubeeCode, setLubeeCode] = useState<any>(null);

  const { data: fetchedLubeeCode } = useGetLubeeCode();

  // useGetLubeeCode 훅이 비동기적으로 데이터를 가져오고, 상태 업데이트
  useEffect(() => {
    if (fetchedLubeeCode) {
      setLubeeCode(fetchedLubeeCode);
    }
  }, [fetchedLubeeCode]);

  useEffect(() => {
    if (lubeeCode?.response?.code === "ALREADY_COUPLE") {
      errorToast("이미 커플로 등록된 상태입니다.");
      setTimeout(() => {
        moveToOnboardingCustom();
      }, 2000);
    }
  }, [lubeeCode, moveToOnboardingCustom]);

  if (!lubeeCode) return <></>;

  const {
    response: { code },
  } = lubeeCode;

  function handleXBtn() {
    navigate("/login");
  }

  async function handleInviteClick() {
    const codeText = code || "복사할 코드가 없습니다."; // 코드가 없을 경우 기본 메시지 설정
    try {
      await navigator.clipboard.writeText(codeText);
      setOpenCopyCodeModal(true);
    } catch (err) {
      alert("텍스트 복사에 실패했습니다. 브라우저 설정을 확인해주세요."); // 에러 발생 시 사용자에게 알림
      console.error("텍스트 복사 실패:", err);
    }
  }

  function handleCloseBtn() {
    setOpenCopyCodeModal(false);
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "연인으로부터 러비 초대장이 도착했어요! 링크를 눌러 초대장을 받아주세요.",
          text: `연인으로부터 러비 초대장이 도착했어요!\n링크를 눌러 초대장을 받아주세요.\n연인의 러비코드: ${code}`,
          url: "https://www.lubee.site/",
        });
        console.log("공유 성공");
      } catch (error) {
        console.error("공유 실패:", error);
      }
    } else {
      alert("이 브라우저는 Web Share API를 지원하지 않습니다.");
    }
  }

  function handleOnboardingBtn() {
    moveToOnboardingCode();
  }

  return (
    <Wrapper>
      <OnboardingHeader handleXBtn={handleXBtn} showXIcon />
      <OnboardingTitleBox titleText={`연인과 연결 후\n러비를 시작해보세요`} />
      <LubeeCodeIcon />
      <MyCodeContainer>
        <MyCodeText>나의 러비코드</MyCodeText>
        <BtnWrapper type="button" onClick={handleInviteClick}>
          <YellowBox $disabled={false}>
            {code}
            <CopyIcon />
          </YellowBox>
        </BtnWrapper>
      </MyCodeContainer>
      <BtnBox>
        <InviteBtn onClick={handleShare}>초대장 보내기</InviteBtn>
        <CodeInputBtn onClick={handleOnboardingBtn}>연인의 러비코드 입력하기</CodeInputBtn>
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
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const LubeeCodeIcon = styled(LubeeCodeIc)`
  width: 20.5rem;
  height: 12.7rem;
  margin-top: 6rem;

  @media (height <= 800px) {
    width: 20.5rem;
    height: 12.7rem;
  }

  @media (height <= 600px) {
    width: 15.375rem;
    height: 9.525rem;
  }

  @media (height <= 400px) {
    width: 10.25rem;
    height: 6.35rem;
  }
`;

const MyCodeText = styled.p`
  color: ${({ theme }) => theme.colors.yellow_600};
  text-align: center;
  ${({ theme }) => theme.fonts.Title_1};
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
  vertical-align: middle;
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
