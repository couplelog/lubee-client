import styled from "styled-components";
import { FirstHoneyIc } from "assets/index";
import CongratsTitleBox from "congrats/components/CongratsTitleBox";

export default function index() {
  return (
    <>
      <FirstHoneyIcon />
      <CongratsTitleBox titleText={"꿀 모으기 성공!"} subtitleText={"연인과의 달달한 하루를\n잘 기록하고 있어요"} />
    </>
  );
}

const FirstHoneyIcon = styled(FirstHoneyIc)`
  width: 16.0379rem;
  height: 16.7789rem;
  margin-top: 18.4rem;
`;
