import styled from "styled-components";
import { CongratsIc, FifthHoneyIc } from "@assets/index";
import CongratsTitleBox from "congrats/components/CongratsTitleBox";

export default function index() {
  return (
    <>
      <CongratsIcon />
      <FifthHoneyIcon />
      <CongratsTitleBox
        titleText={"꿀 5개 모으기 성공!"}
        subtitleText={"연인과의 달달한 하루를\n빠짐없이 기록했어요"}
      />
    </>
  );
}

const CongratsIcon = styled(CongratsIc)`
  width: 39.843rem;
  height: 44.7055rem;
`;

const FifthHoneyIcon = styled(FifthHoneyIc)`
  position: absolute;
  top: 16.188rem;
  width: 13.8202rem;
  height: 19.597rem;
`;
