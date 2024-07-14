import styled from "styled-components";
import { CalInfoTypes } from "../types/CalInfoTypes";
import { HoneyMonthIc } from "@assets/index";
import { Day } from "@common/core/calendarData";
import DateDetailModal from "./DateDetailModal";
import { useEffect, useRef, useState } from "react";
import { fullPicData } from "@common/core/fullPicData";
interface CalContainerProps {
  info: CalInfoTypes;
}

const CalContainer = ({ info }: CalContainerProps) => {
  /*모달 애니메이션*/
  const [openDateDetailModal, setOpenDateDetailModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!modalRef.current || modalRef.current.contains(e.target as Node)) return;
      setOpenDateDetailModal(false);
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
  const formatMonth = (month: number): string => {
    return month < 10 ? `0${month}` : `${month}`;
  };

  data.forEach((el) => (LIST[el.date + start - 1] = 1));

  // date
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  function handleDateDetailModal(date: number) {
    setSelectedDate(date);
    setOpenDateDetailModal(true);
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
        {LIST.map((val, idx) => (
          <Item key={idx} $isUploaded={val === 1} onClick={() => handleDateDetailModal(idx - start + 1)}>
            <Date $isHoliday={holiday.includes(idx - start + 1)}>
              {idx - start < 0 || idx - start + 1 > length ? "" : idx - start + 1}
            </Date>
          </Item>
        ))}
      </Grid>
      {openDateDetailModal && (
        <DateDetailModal ref={modalRef} date={`${month}월 ${selectedDate}일`} fullPicData={fullPicData} />
      )}
    </Container>
  );
};

export default CalContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const Item = styled.button<{ $isUploaded: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 31px;
  background-color: ${({ theme, $isUploaded }) => ($isUploaded ? theme.colors.yellow : theme.colors.gray_50)};
  color: ${({ theme, $isUploaded }) => ($isUploaded ? theme.colors.gray_800 : theme.colors.gray_500)};
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
