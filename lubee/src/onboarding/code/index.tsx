import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import OnboardingHeader from "../components/OnboardingHeader";
import OnboardingTitleBox from "../components/OnboardingTitleBox";
import YellowBox from "../components/YellowBox";
import OnboardingBtn from "../components/OnboardingBtn";
import { usePostLubeeCode } from "../hooks/usePostLubeeCode";

interface CodeProps {
  moveToOnboardingConnect: () => void;
  moveToOnboardingCustom: () => void;
}

export default function index(props: CodeProps) {
  const { moveToOnboardingConnect, moveToOnboardingCustom } = props;
  const [code, setCode] = useState("");
  const yellowBoxRef = useRef<{ focus: () => void }>(null);
  const { mutate: postLubeeCodeMutate } = usePostLubeeCode(moveToOnboardingCustom); // 성공 시 콜백 함수(custom 페이지로 넘어가는 함수) 전달

  useEffect(() => {
    // 페이지가 로드되고 나서 입력 필드에 포커스를 설정
    if (yellowBoxRef.current) {
      yellowBoxRef.current.focus();
    }
  }, []);

  const isOnboardingBtnDisabled = code === "";

  function handleBackBtn() {
    moveToOnboardingConnect();
  }

  function handleOnboardingBtn() {
    postLubeeCodeMutate({ inputCode: code });
  }

  return (
    <Wrapper>
      <OnboardingHeader handleBackBtn={handleBackBtn} showBackIcon />
      <ContentsContainer>
        <OnboardingTitleBox titleText="연인의 러비코드를 입력하세요" />
        <YellowBox
          inputValue={code}
          setInputValue={setCode}
          $disabled={true}
          placeholder="코드 입력"
          ref={yellowBoxRef}
        />
      </ContentsContainer>
      <OnboardingBtn handleOnboardingBtn={handleOnboardingBtn} text="연결하기" $disabled={isOnboardingBtnDisabled} />
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

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.8rem;
  align-items: center;
`;
