import styled from "styled-components";
import DateBox from "./components/DateBox";
import TodayTitle from "./components/TodayTitle";
import HoneyIconContainer from "./components/HoneyIconContainer";
import TodayProfileBox from "./components/TodayProfileBox";
import { PlusIc, PlusClickedIc } from "assets/index";
import { useState } from "react";
import Toggle from "./components/Toggle";
import ToggleCalendar from "./components/ToggleCalendar";
import { useGetTodayHoney } from "home/hooks/useGetTodayHoney";
import { getServerDate, getTodayDate, getTodayMonth } from "@common/utils/dateFormat";
import ContentContainer from "./components/ContentContainer";
import { useGetLoveDay } from "home/hooks/useGetLoveDay";
import TodayHomeHeader from "./components/TodayHomeHeader";

export default function index() {
  const [openToggle, setOpenToggle] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [isPlusClicked, setIsPlusClicked] = useState<boolean>(false);
  const totalHoney = useGetTodayHoney(getServerDate());
  const loveDay = useGetLoveDay();

  if (!totalHoney || !loveDay || !loveDay?.response) return <></>;

  const { response } = totalHoney;
  const {
    response: { love_day },
  } = loveDay;

  function handlePlusBtn() {
    setOpenToggle((open) => !open);
    setIsPlusClicked((clicked) => !clicked);
  }

  function handleCalendar() {
    setOpenToggle(false);
    setShowCalendar((open) => !open);
    setIsPlusClicked(false);
  }

  return (
    <>
      <TodayHomeHeader />
      <Wrapper>
        <Container>
          <DateBox />
          <TodayTitle day={love_day} />
          <SubContainer>
            <HoneyIconContainer honey={response} />
            <TodayProfileBox />
          </SubContainer>
        </Container>
        <ContentContainer date={`${getTodayMonth}월 ${getTodayDate}일`} isToday={true} />
        {!showCalendar && (
          <BtnWrapper type="button" onClick={handlePlusBtn}>
            {isPlusClicked ? <PlusClickedIcon /> : <PlusIcon />}
          </BtnWrapper>
        )}
        {openToggle && <Toggle handleCalendar={handleCalendar} showCalendar={showCalendar} />}
        {showCalendar && <ToggleCalendar showCalendar={showCalendar} handleCalendar={handleCalendar} />}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
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
