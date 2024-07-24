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
