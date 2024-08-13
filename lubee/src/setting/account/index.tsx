import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SettingHeader from "../components/SettingHeader";
import ConfirmModal from "../components/ConfirmModal";
import { SettingRightArrowIc } from "assets/index";
import { useGetSignOut } from "setting/hooks/useGetSignOut";

export default function index() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  function handleBackBtn() {
    navigate("/mypage");
  }

  function handleConfirmBtn() {
    const signOutData = useGetSignOut();
    if (!signOutData) return <></>;

    if (signOutData?.success === true) {
      navigate("/splash"); // 성공 시 splash 페이지로 이동
    }
  }

  function handleCloseBtn() {
    setModalOpen(false);
    navigate("/setting/account");
  }

  return (
    <Wrapper>
      <SettingHeader handleBackBtn={handleBackBtn} title="환경 설정" />
      <ContentContainer>
        <TitleText>개인 설정</TitleText>
        <BtnWrapper
          type="button"
          onClick={() => {
            navigate("/setting/couple");
          }}>
          <MenuContainer>
            <SubtitleText>커플 연결</SubtitleText>
            <RightArrowIcon />
          </MenuContainer>
        </BtnWrapper>
        <BtnWrapper
          type="button"
          onClick={() => {
            setModalOpen(true);
          }}>
          <MenuContainer>
            <SubtitleText>회원 탈퇴</SubtitleText>
            <RightArrowIcon />
          </MenuContainer>
        </BtnWrapper>
      </ContentContainer>
      {isModalOpen && (
        <ConfirmModal
          handleConfirmBtn={handleConfirmBtn}
          handleCloseBtn={handleCloseBtn}
          titleText="정말로 탈퇴하시겠어요?"
          subtitleText="영구적으로 계정이 삭제됩니다"
          btnText="탈퇴"
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: flex-start;
  width: 100%;
  padding: 1.6rem 2rem;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body_4};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const BtnWrapper = styled.button`
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const MenuContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SubtitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body_3};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const RightArrowIcon = styled(SettingRightArrowIc)`
  width: 1.6rem;
  height: 1.6rem;
`;
