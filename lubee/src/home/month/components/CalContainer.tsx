import styled from "styled-components";
import { CalInfoTypes } from "../types/CalInfoTypes";
import { HoneyMonthIc } from "@assets/index";
import DateDetailModal from "./DateDetailModal";
import { useEffect, useRef, useState } from "react";
import { formatMonth, getTodayDate, getTodayMonth, getTodayYear, isFutureDate } from "@common/utils/dateFormat";
import { infoToast } from "@common/utils/toast";
import { useGetCalendar } from "home/hooks/useGetCalendar";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface CalContainerProps {
  info: CalInfoTypes;
  showCalendar?: boolean;
  setOpenDateDetailModal?: (open: boolean) => void;
}
const CalContainer = ({ info, showCalendar = false, setOpenDateDetailModal }: CalContainerProps) => {
  const [openDateDetailModalLocal, setOpenDateDetailModalLocal] = useState<boolean>(false);
  // DateDetail 모달에서 헤더에 date 표기 위한
  const [selectedDate, setSelectedDate] = useState<number>();
  const [dayDto, setDayDto] = useState<MemoryBaseDtoDataTypes[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  const { year, month, start, length } = info;
  const LIST = new Array(start + length).fill(0);

  const calendarData = useGetCalendar();

  /*모달 애니메이션*/
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!modalRef.current || modalRef.current.contains(e.target as Node)) return;
      if (setOpenDateDetailModal) {
        setOpenDateDetailModal(false); // 부모 state 업데이트
      }
      setOpenDateDetailModalLocal(false); // current state 업데이트
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [modalRef]);

  /*달력에서 업로드한 day 조회 API*/
  useEffect(() => {
    if (calendarData) {
      const {
        response: { calendarMemoryYearMonthDtoList },
      } = calendarData;

      calendarMemoryYearMonthDtoList.forEach(({ year: y, month: m, calendarMemoryDayDtoList }) => {
        if (y === year && m === month) {
          calendarMemoryDayDtoList.forEach(({ day, memoryBaseListDto }) => {
            LIST[day + start - 1] = 1; // List 배열에 사진을 업로드한 day는 1로 찍기
            console.log("day", day);
            // Save memory data for the selected date
            if (selectedDate !== null && selectedDate === day) {
              setDayDto(memoryBaseListDto);
            }
          });
        }
      });
    }
  }, [calendarData, selectedDate, year, month, start, LIST]);

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

  if (!calendarData) {
    return null;
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
        {LIST.map((val, idx) => {
          const date = idx - start + 1;
          const isToday = year === getTodayYear && month === getTodayMonth && date === getTodayDate;
          const isEmpty = idx - start < 0 || date > length;

          return (
            <Item
              key={idx}
              $isUploaded={val === 1}
              $isToday={isToday}
              $isEmpty={isEmpty}
              onClick={() => !isEmpty && handleDateDetailModal(date)}>
              <Date>{idx - start < 0 || date > length ? "" : date}</Date>
            </Item>
          );
        })}
      </Grid>
      {openDateDetailModalLocal && (
        <DateDetailModal
          ref={modalRef}
          dateText={`${month}월 ${selectedDate}일`}
          date={`${formatMonth(month)}${selectedDate}`}
          showCalendar={showCalendar}
          dayDto={dayDto}
        />
      )}
    </Container>
  );
};

export default CalContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  height: fit-content;
  padding: 1.6rem 1.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.header`
  display: flex;
  gap: 0.8rem;
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
  gap: 0.705rem 0.9rem;
  margin-bottom: 0.764rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const Item = styled.button<{ $isUploaded: boolean; $isToday: boolean; $isEmpty: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8814rem;
  border-radius: 27.322px;
  background-color: ${({ theme, $isUploaded, $isToday, $isEmpty }) =>
    $isEmpty
      ? theme.colors.white
      : $isToday
        ? theme.colors.yellow_100
        : $isUploaded
          ? theme.colors.yellow
          : theme.colors.white};
  color: ${({ theme, $isUploaded, $isEmpty }) =>
    $isEmpty ? theme.colors.gray_400 : $isUploaded ? theme.colors.gray_800 : theme.colors.gray_500};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, $isEmpty }) => ($isEmpty ? theme.colors.white : theme.colors.gray_800)};
    color: ${({ theme, $isEmpty }) => ($isEmpty ? theme.colors.gray_400 : theme.colors.white)};
    cursor: ${({ $isEmpty }) => ($isEmpty ? "default" : "pointer")};
  }
`;

//color: ${({ theme, $isHoliday }) => $isHoliday && theme.colors.gray_500};
const Date = styled.p`
  ${({ theme }) => theme.fonts.Ginto_18};
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
