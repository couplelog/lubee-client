import { FinalEmojisDataTypes } from "@common/types/EmojisDataTypes";
import {
  YellowHeartIc,
  YellowBangIc,
  YellowHoneyIc,
  YellowSmileIc,
  YellowThumbIc,
  MintHeartIc,
  MintBangIc,
  MintHoneyIc,
  MintSmileIc,
  MintThumbIc,
} from "@assets/index";

export const emojisData: FinalEmojisDataTypes[] = [
  {
    account: "me",
    emojiData: [
      { emoji: "heart", iconSrc: YellowHeartIc },
      { emoji: "honey", iconSrc: YellowHoneyIc },
      { emoji: "smile", iconSrc: YellowSmileIc },
      { emoji: "bang", iconSrc: YellowBangIc },
      { emoji: "thumb", iconSrc: YellowThumbIc },
    ],
  },
  {
    account: "partner",
    emojiData: [
      { emoji: "heart", iconSrc: MintHeartIc },
      { emoji: "honey", iconSrc: MintHoneyIc },
      { emoji: "smile", iconSrc: MintSmileIc },
      { emoji: "bang", iconSrc: MintBangIc },
      { emoji: "thumb", iconSrc: MintThumbIc },
    ],
  },
];
