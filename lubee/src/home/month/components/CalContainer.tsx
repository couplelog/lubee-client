import styled from "styled-components";
import { CalInfoTypes } from "../types/CalInfoTypes";
import { HoneyMonthIc } from "assets/index";
import DateDetailModal from "./DateDetailModal";
import { useEffect, useRef, useState } from "react";
import { formatMonth, getTodayDate, getTodayMonth, getTodayYear, isFutureDate } from "@common/utils/dateFormat";
import { errorToast } from "@common/utils/toast";
import { useGetCalendar } from "home/hooks/useGetCalendar";
import { useGetMonthHoney } from "home/hooks/useGetMonthHoney";

interface CalContainerProps {
  info: CalInfoTypes;
  showCalendar?: boolean;
  setOpenDateDetailModal?: (open: boolean) => void;
  isTodayCalendar: boolean;
}

const CalContainer = ({ info, showCalendar = false, setOpenDateDetailModal, isTodayCalendar }: CalContainerProps) => {
  const [openDateDetailModalLocal, setOpenDateDetailModalLocal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<number | undefined>();
  const modalRef = useRef<HTMLDivElement>(null);

  const { year, month, start, length } = info;
  const [list, setList] = useState<number[]>(new Array(start + length).fill(0)); // LIST 초기화

  const { data: calendarData, refetch: refetchCalendarData } = useGetCalendar();
  const totalHoney = useGetMonthHoney(year, month);

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
  }, [modalRef, setOpenDateDetailModal]);

  /*달력에서 업로드한 day 조회 API*/
  useEffect(() => {
    if (calendarData) {
      const {
        response: { calendarMemoryYearMonthDtoList },
      } = calendarData;

      const updatedList = new Array(start + length).fill(0); // 새로운 list

      calendarMemoryYearMonthDtoList.forEach(({ year: y, month: m, calendarMemoryDayDtoList }) => {
        if (y === year && m === month) {
          calendarMemoryDayDtoList.forEach(({ day }) => {
            updatedList[day + start - 1] = 1; // 사진을 업로드한 day는 1로찍기
            console.log("day", day);
          });
        }
      });

      setList(updatedList);
    }
  }, [calendarData, year, month, start, length]);

  // calendarData가 바뀔 때마다 useGetCalendar refetch
  useEffect(() => {
    refetchCalendarData();
  }, [calendarData, refetchCalendarData]);

  function handleDateDetailModal(date: number) {
    if (isFutureDate(year, month, date)) {
      errorToast("오늘 이전의 날짜를 선택해주세요");
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

  /*혜연이 부분*/
  if (!totalHoney) {
    return null;
  }

  const { response } = totalHoney;

  // 선택 날짜를 서버에게 넘기기 위해 선택한 날짜의 YYYY.MM.DD 형식으로 만들기
  const formatSelectedDate = (year: number, month: number, date: number) => {
    const formattedMonth = String(month).padStart(2, "0");
    const formattedDate = String(date).padStart(2, "0");
    return `${year}.${formattedMonth}.${formattedDate}`;
  };

  return (
    <Container>
      <Header>
        <HeaderDate>{`${year}.${formatMonth(month)}`}</HeaderDate>
        <HeaderHoney>
          <HoneyMonthIcon />
          <HoneyCount>{response}</HoneyCount>
        </HeaderHoney>
      </Header>
      <Grid>
        {list.map((val, idx) => {
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
          urlDate={`${formatMonth(month)}${selectedDate}`}
          showCalendar={showCalendar}
          selectedDate={selectedDate}
          month={month}
          year={year}
          serverDate={selectedDate ? formatSelectedDate(year, month, selectedDate) : ""}
          isTodayCalendar={isTodayCalendar}
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
  padding: 2rem 2.8rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.header`
  display: flex;
  gap: 1.1rem;
  align-items: center;
  padding: 0 0 0 1rem;
`;

const HeaderDate = styled.p`
  ${({ theme }) => theme.fonts.Calendar_Honey};

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
  ${({ theme }) => theme.fonts.Calendar_Honey};

  color: ${({ theme }) => theme.colors.gray_800};
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

const Date = styled.p`
  ${({ theme }) => theme.fonts.Calendar_Number_Body};
`;
