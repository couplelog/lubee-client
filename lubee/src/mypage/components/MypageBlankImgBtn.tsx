import styled from "styled-components";
import blankImg from "assets/image/blankImg.png";
import { infoToast } from "@common/utils/toast";

export default function MypageBlankImgBtn() {
  function handleAddPicBtn() {
    infoToast("서비스 준비중입니다");
  }

  return (
    <Container type="button" onClick={handleAddPicBtn}>
      <img src={blankImg} />
    </Container>
  );
}

const Container = styled.button`
  width: fit-content;
  padding: 0;
  border: none;
  background: none;
`;
