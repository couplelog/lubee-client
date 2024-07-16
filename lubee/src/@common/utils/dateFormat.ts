// 오늘 날짜 얻기
const today = new Date();
export const getTodayDate = today.getDate();
export const getTodayMonth = today.getMonth() + 1;
export const getTodayYear = today.getFullYear();

// 한 자릿수 달 앞에 0붙이기
export const formatMonth = (month: number): string => {
  return month < 10 ? `0${month}` : `${month}`;
};
