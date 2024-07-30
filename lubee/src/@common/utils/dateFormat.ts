// 오늘 날짜 얻기
export const today = new Date();
export const getTodayDate = today.getDate();
export const getTodayMonth = today.getMonth() + 1;
export const getTodayYear = today.getFullYear();
export const svrToday = today.toISOString;

// 한 자릿수 달 앞에 0붙이기
export const formatMonth = (month: number): string => {
  return month < 10 ? `0${month}` : `${month}`;
};

// 오늘 이후의 날짜인지 확인하는 함수
export const isFutureDate = (year: number, month: number, date: number): boolean => {
  return new Date(year, month - 1, date) > today;
};

// 7월 24일 수요일 포맷
export function todayHeaderDateFormat(date: Date): string {
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const weekday = weekdays[date.getDay()];

  return `${month} ${day}일 ${weekday}`;
}

export function monthHeaderDateFormat(year: number, month: number, day?: number): string {
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  const date = new Date(year, month - 1, day);
  const weekday = weekdays[date.getDay()];

  return `${months[month - 1]} ${day}일 ${weekday}`;
}

// 오늘 날짜 DDDD. MM. DD
export function getCurrentDate() {
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}. ${month}. ${day}`;
}

// api용 날짜 포맷 DDDD.MM.DD
export function getServerDate() {
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}
