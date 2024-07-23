import styled from "styled-components";
import DateBox from "./components/DateBox";
import TodayTitle from "./components/TodayTitle";
import HoneyIconContainer from "./components/HoneyIconContainer";
import TodayProfileBox from "./components/TodayProfileBox";
import ContentContainer from "./components/ContentContainer";
import { PlusIc, PlusClickedIc } from "@assets/index";
import { useState } from "react";
import Toggle from "./components/Toggle";
import ToggleCalendar from "./components/ToggleCalendar";
import { useGetTodayHoney } from "../hooks/useGetTodayHoney";
import { getCurrentDate } from "@common/utils/dateFormat";

export default function index() {
  const [openToggle, setOpenToggle] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [isPlusClicked, setIsPlusClicked] = useState<boolean>(false);
  const NumHoney = useGetTodayHoney(getCurrentDate()).data?.response ?? 0;

  function handlePlusBtn() {
    setOpenToggle((open) => !open);
    setIsPlusClicked((clicked) => !clicked);
  }

  function handleCalendar() {
    setOpenToggle(false);
    setShowCalendar((open) => !open);
  }

  return (
    <Wrapper>
      <Container>
        <DateBox />
        <TodayTitle day={387} />
        <SubContainer>
          <HoneyIconContainer honey={NumHoney} />
          <TodayProfileBox />
        </SubContainer>
      </Container>
      <ContentContainer />
      {!showCalendar && (
        <BtnWrapper type="button" onClick={handlePlusBtn}>
          {isPlusClicked ? <PlusClickedIcon /> : <PlusIcon />}
        </BtnWrapper>
      )}
      {openToggle && <Toggle handleCalendar={handleCalendar} showCalendar={showCalendar} />}
      {showCalendar && <ToggleCalendar showCalendar={showCalendar} handleCalendar={handleCalendar} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SubContainer = styled.section`
  display: flex;
  gap: 4rem;
  margin-top: -0.8rem;
`;

const PlusIcon = styled(PlusIc)`
  position: absolute;
  right: 1.8rem;
  bottom: 7.5rem;
  width: 6.4rem;
  height: 6.4rem;
`;

const PlusClickedIcon = styled(PlusClickedIc)`
  position: absolute;
  right: 1.8rem;
  bottom: 7.5rem;
  width: 6.4rem;
  height: 6.4rem;
`;

/*z-index 속성때문에 공통 못씀*/
export const BtnWrapper = styled.button`
  z-index: 1;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
