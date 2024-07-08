import { calInfo } from "@pages/CalendarTestPage";

const Day = ["일", "월", "화", "수", "목", "금", "토"];

const CAL: calInfo[] = [
  {
    year: 2023,
    month: 12,
    start: 5,
    length: 31,
    holiday: [25],
    data: [{ date: 5 }, { date: 7 }, { date: 25 }, { date: 27 }],
  },
  {
    year: 2024,
    month: 1,
    start: 1,
    length: 31,
    holiday: [1],

    data: [{ date: 5 }, { date: 7 }, { date: 30 }, { date: 27 }, { date: 1 }, { date: 13 }],
  },
  {
    year: 2024,
    month: 2,
    start: 4,
    length: 29,
    holiday: [9, 10],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 3,
    start: 5,
    length: 31,
    holiday: [1],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 4,
    start: 1,
    length: 30,
    holiday: [10],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 5,
    start: 3,
    length: 31,
    holiday: [6, 15],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 6,
    start: 1,
    length: 30,
    holiday: [1],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 7,
    start: 1,
    length: 31,
    holiday: [1],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 8,
    start: 4,
    length: 31,
    holiday: [1],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 9,
    start: 0,
    length: 30,
    holiday: [16, 17, 18],

    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 10,
    start: 2,
    length: 31,
    holiday: [3, 9],

    data: [],
  },
  {
    year: 2024,
    month: 11,
    start: 5,
    length: 30,
    holiday: [1],
    data: [{ date: 5 }, { date: 7 }],
  },
  {
    year: 2024,
    month: 12,
    start: 1,
    length: 31,
    holiday: [1],
    data: [{ date: 10 }, { date: 7 }],
  },
  {
    year: 2025,
    month: 1,
    start: 4,
    length: 31,
    holiday: [1],
    data: [{ date: 5 }, { date: 7 }],
  },
];

export { CAL, Day };
