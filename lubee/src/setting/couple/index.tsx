import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";
import ConfirmModal from "../components/ConfirmModal";

export default function index() {
  const navigate = useNavigate();

  function handleBackBtn() {
    navigate("/setting/account");
  }

  function handleConfirmBtn() {
    navigate("/setting/account");
  }

  function handleCloseBtn() {
    navigate("/setting/account");
  }

  return (
    <Wrapper>
      <SettingHeader handleBackBtn={handleBackBtn} title="커플 연결" />
      <ConfirmModal
        handleConfirmBtn={handleConfirmBtn}
        handleCloseBtn={handleCloseBtn}
        titleText="커플 연결을 끊으시겠어요?"
        subtitleText="영구적으로 기록이 삭제됩니다"
        btnText="연결 끊기"
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
