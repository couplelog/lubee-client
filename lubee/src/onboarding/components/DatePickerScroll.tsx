import React, { useEffect } from "react";

// Rolldate 인터페이스 정의
interface RolldateOptions {
  el: string;
  format: string;
  minStep: number;
  beginYear: number;
  endYear: number;
  trigger: string;
  lang: {
    title: string;
    cancel: string;
    confirm: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    min: string;
    sec: string;
  };
  init: () => void;
  moveEnd: (scroll: any) => void;
  confirm: (date: string) => void;
  cancel: () => void;
  value: string;
}

// window 객체에 Rolldate를 추가
declare global {
  interface Window {
    Rolldate: new (options: RolldateOptions) => void;
  }
}

const DatePickerScroll: React.FC = () => {
  useEffect(() => {
    // Rolldate 초기화
    const Rolldate = window.Rolldate;
    if (Rolldate) {
      new Rolldate({
        el: "#example",
        format: "YYYY-MM-DD", // 연도, 월, 일 선택할 수 있도록 설정
        minStep: 1,
        beginYear: 2000,
        endYear: 2100,
        trigger: "tap",
        lang: {
          title: "날짜 선택", // 선택기 제목
          cancel: "취소", // 취소 버튼 텍스트
          confirm: "확인", // 확인 버튼 텍스트
          year: "년", // 연도 텍스트
          month: "월", // 월 텍스트
          day: "일", // 일 텍스트
          hour: "",
          min: "",
          sec: "",
        },
        init: function () {
          console.log("On init");
        },
        moveEnd: function (scroll) {
          console.log(scroll);
          console.log("scroll end");
        },
        confirm: function (date) {
          console.log(date);
          console.log("confirm");
        },
        cancel: function () {
          console.log("cancel");
        },
        value: "2023-07-09", // 기본 날짜 설정
      });
    } else {
      console.error("Rolldate is not loaded");
    }
  }, []);

  return (
    <div>
      <input readOnly type="text" id="example" placeholder="날짜를 선택하세요" />
    </div>
  );
};

export default DatePickerScroll;
