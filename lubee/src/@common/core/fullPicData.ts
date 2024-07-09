import fullPic from "@assets/image/fullPic.png";

interface FullPicDataProps {
  time: string;
  picSrc: string;
  location: string;
  name: string;
}

export const fullPicData: FullPicDataProps[] = [
  {
    time: "오후 2:17",
    picSrc: fullPic,
    location: "청년다방",
    name: "맹꽁이",
  },
  {
    time: "오후 3:17",
    picSrc: fullPic,
    location: "고기",
    name: "로지",
  },
  {
    time: "오후 4:17",
    picSrc: fullPic,
    location: "회",
    name: "맹꽁이",
  },
  {
    time: "오후 11:17",
    picSrc: fullPic,
    location: "아이엠 그라운드",
    name: "로지",
  },
  {
    time: "오후 12:17",
    picSrc: fullPic,
    location: "어디까지 길어지나 테스트",
    name: "맹꽁이",
  },
];
