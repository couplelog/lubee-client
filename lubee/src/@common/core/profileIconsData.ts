import { ProfileIconDataTypes } from "@common/types/EmojisDataTypes";
import {
  MintProfile2Ic,
  MintProfile3Ic,
  MintProfile4Ic,
  MintProfile5Ic,
  MintProfile6Ic,
  Profile1Ic,
  Profile2Ic,
  Profile3Ic,
  Profile4Ic,
  Profile5Ic,
  Profile6Ic,
} from "@assets/index";

import { MintProfile1Ic } from "@assets/index";

export const profileIconsData: ProfileIconDataTypes[] = [
  {
    account: "me",
    profileIcon: [
      { emoji: "profile1", iconSrc: Profile1Ic },
      { emoji: "profile2", iconSrc: Profile2Ic },
      { emoji: "profile3", iconSrc: Profile3Ic },
      { emoji: "profile4", iconSrc: Profile4Ic },
      { emoji: "profile5", iconSrc: Profile5Ic },
      { emoji: "profile6", iconSrc: Profile6Ic },
    ],
  },
  {
    account: "partner",
    profileIcon: [
      { emoji: "profile1", iconSrc: MintProfile1Ic },
      { emoji: "profile2", iconSrc: MintProfile2Ic },
      { emoji: "profile3", iconSrc: MintProfile3Ic },
      { emoji: "profile4", iconSrc: MintProfile4Ic },
      { emoji: "profile5", iconSrc: MintProfile5Ic },
      { emoji: "profile6", iconSrc: MintProfile6Ic },
    ],
  },
];
