import styled from "styled-components";
import { CalInfoTypes } from "../types/CalInfoTypes";
import { HoneyMonthIc } from "@assets/index";
import { Day } from "@common/core/calendarData";
import DateDetailModal from "./DateDetailModal";
import { useEffect, useRef, useState } from "react";
import { fullPicData } from "@common/core/fullPicData";
import { formatMonth, getTodayDate, getTodayMonth, getTodayYear, isFutureDate } from "@common/utils/dateFormat";
import { errorToast, infoToast } from "@common/utils/toast";

interface CalContainerProps {
  info: CalInfoTypes;
  showCalendar?: boolean;
  setOpenDateDetailModal?: (open: boolean) => void;
}

const CalContainer = ({ info, showCalendar = false, setOpenDateDetailModal }: CalContainerProps) => {
  /*모달 애니메이션*/
  const [openDateDetailModalLocal, setOpenDateDetailModalLocal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!modalRef.current || modalRef.current.contains(e.target as Node)) return;
      if (setOpenDateDetailModal) {
        setOpenDateDetailModal(false); //부모 state 업데이트
      }
      setOpenDateDetailModalLocal(false); //current state 업데이트
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [modalRef]);

  /*fullpic - Month 페이지로 이동하는 함수
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleGoToDate = () => {
    if (date) {
      navigate(`/fullpic/${date}`);
    }
  };*/

  // data.map((el) => (LIST[el.date + start - 1] = el.price));
  // data.sort((a, b) => a.price - b.price);

  // List 배열에 사진을 업로드한 날짜는 1로 찍기
  const LIST = new Array(42).fill(0);
  const { year, month, start, length, holiday, data } = info;

  data.forEach((el) => (LIST[el.date + start - 1] = 1));

  // DateDetail 모달에서 헤더에 date 표기 위한
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  function handleDateDetailModal(date: number) {
    if (isFutureDate(year, month, date)) {
      infoToast("오늘 이전만 선택가능합니다");
      setSelectedDate(date);
      return;
    }

    setSelectedDate(date);

    setTimeout(() => {
      if (setOpenDateDetailModal) {
        setOpenDateDetailModal(true);
      }
      setOpenDateDetailModalLocal(true);
    }, 400); // 잠시 홀딩된 뒤 모달 띄우기
  }
  return (
    <Container>
      <Header>
        <HeaderDate>{`${year}.${formatMonth(month)}`}</HeaderDate>
        <HeaderHoney>
          <HoneyMonthIcon />
          <HoneyCount>35</HoneyCount>
        </HeaderHoney>
      </Header>
      <Grid>
        {Day.map((day) => (
          <Weekday key={day}>{day}</Weekday>
        ))}
        {LIST.map((val, idx) => {
          const date = idx - start + 1;
          const isToday = year === getTodayYear && month === getTodayMonth && date === getTodayDate;

          return (
            <Item key={idx} $isUploaded={val === 1} $isToday={isToday} onClick={() => handleDateDetailModal(date)}>
              <Date $isHoliday={holiday.includes(date)}>{idx - start < 0 || date > length ? "" : date}</Date>
            </Item>
          );
        })}
      </Grid>
      {openDateDetailModalLocal && (
        <DateDetailModal
          ref={modalRef}
          date={`${month}월 ${selectedDate}일`}
          fullPicData={fullPicData}
          showCalendar={showCalendar}
        />
      )}
    </Container>
  );
};

export default CalContainer;

// Rest of your styled components...

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem 1.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.header`
  display: flex;
  gap: 2.3rem;
  align-items: center;
  padding: 0 0 0 1rem;
`;

const HeaderDate = styled.p`
  ${({ theme }) => theme.fonts.Ginto_16};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const HeaderHoney = styled.div`
  display: flex;
  align-items: center;
`;

const HoneyMonthIcon = styled(HoneyMonthIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const HoneyCount = styled.p`
  color: ${({ theme }) => theme.colors.gray_800};
  ${({ theme }) => theme.fonts.Ginto_16};
`;

const Grid = styled.ul`
  display: grid;
  gap: 0.8rem 1rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const Item = styled.button<{ $isUploaded: boolean; $isToday: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 31px;
  background-color: ${({ theme, $isUploaded, $isToday }) =>
    $isToday ? theme.colors.yellow_100 : $isUploaded ? theme.colors.yellow : theme.colors.white};
  color: ${({ theme, $isUploaded }) => ($isUploaded ? theme.colors.gray_800 : theme.colors.gray_500)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_800};
    color: ${({ theme }) => theme.colors.white};
  }
`;

//color: ${({ theme, $isHoliday }) => $isHoliday && theme.colors.gray_500};
const Date = styled.p<{ $isHoliday: boolean }>`
  ${({ theme }) => theme.fonts.Ginto_18};
`;

const Weekday = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray_600};
  ${({ theme }) => theme.fonts.Day};
`;

// const Price = styled.span<{ $isColored: string }>`
//   ${({ theme }) => theme.fonts.Ginto_18};

//   height: 1.8rem;
//   color: ${({ theme, $isColored }) =>
//     $isColored === "min" ? theme.colors.blue : $isColored === "max" ? theme.colors.red : theme.colors.grey_2};
// `;

// /* 일요일 column 빨간 색상으로 */
// & > li:nth-child(7n + 1) {
//   color: ${({ theme }) => theme.colors.red};
// }
