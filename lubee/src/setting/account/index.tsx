import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";
import ConfirmModal from "../components/ConfirmModal";

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
