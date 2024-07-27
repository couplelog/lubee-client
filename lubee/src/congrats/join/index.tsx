import styled from "styled-components";
import { CongratIc, CompleteIc } from "assets/index";
import CongratsTitleBox from "congrats/components/CongratsTitleBox";

export default function index() {
  return (
    <>
      <CongratIcon />
      <CompleteIcon />
      <CongratsTitleBox titleText="작성 완료!" subtitleText="연인과 함께 꿀 모으러 가볼까요?" />
    </>
  );
}

const CongratIcon = styled(CongratIc)`
  width: 39.843rem;
  height: 44.7055rem;
`;

const CompleteIcon = styled(CompleteIc)`
  position: absolute;
  top: 10.261rem;
  left: 0;
  width: 30.1498rem;
  height: 23.6735rem;
`;
