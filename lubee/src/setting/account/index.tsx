import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";
import ConfirmModal from "../components/ConfirmModal";
import { SettingRightArrowIc } from "assets/index";

export default function index() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/mypage");
  }

  function handleConfirmBtn() {
    navigate("/setting/account");
  }

  function handleCloseBtn() {
    navigate("/setting/account");
  }

  return (
    <Wrapper>
      <SettingHeader handleBackBtn={handleBackBtn} title="환경 설정" />
      <TextContainer>
        <TitleText>개인 설정</TitleText>
      </TextContainer>
      <ConfirmModal
        handleConfirmBtn={handleConfirmBtn}
        handleCloseBtn={handleCloseBtn}
        titleText="정말로 탈퇴하시겠어요?"
        subtitleText="영구적으로 계정이 삭제됩니다"
        btnText="탈퇴"
      />
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

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const SubtitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body_3};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const RightArrowIcon = styled(SettingRightArrowIc)`
  width: 1.6rem;
  height: 1.6rem;
`;
