import { atom } from "recoil";

export const uploadLocationState = atom<boolean>({
  key: "uploadLocationPageState",
  default: true,
});

export const uploadPicState = atom<boolean>({
  key: "uploadPicPageState",
  default: false,
});
