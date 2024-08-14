import { atom } from "recoil";

export const uploadPicState = atom<boolean>({
  key: "uploadPicPageState",
  default: false,
});

export const onboardingConnectState = atom<boolean>({
  key: "onboardingConnectState",
  default: true,
});

export const onboardingCodeState = atom<boolean>({
  key: "onboardingCodeState",
  default: false,
});

export const onboardingCustomState = atom<boolean>({
  key: "onboardingCustomState",
  default: false,
});

export const onboardingProfileState = atom<boolean>({
  key: "onboardingProfileState",
  default: false,
});

export const onboardingBirthState = atom<boolean>({
  key: "onboardingBirthState",
  default: false,
});

export const onboardingAnnivState = atom<boolean>({
  key: "onboardingAnnivState",
  default: false,
});

export const settingCoupleState = atom<boolean>({
  key: "settingCoupleState",
  default: false,
});

/*온보딩 정보 post를 위한*/
export const profileState = atom<string>({
  key: "profileState",
  default: "",
});

export const nicknameState = atom<string>({
  key: "nicknameState",
  default: "",
});

export const birthdayState = atom<string>({
  key: "birthdayState",
  default: "",
});

export const startDateState = atom<string>({
  key: "startDateState",
  default: "",
});

/* 이모지 저장 array*/

export const emojiNumbersArrayState = atom<number[]>({
  key: "emojiNumbersArray",
  default: JSON.parse(sessionStorage.getItem("numbersArray") || "[]"),
});
