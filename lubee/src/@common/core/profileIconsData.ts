import {
  MintProfileStroke1Ic,
  MintProfileStroke2Ic,
  MintProfileStroke3Ic,
  MintProfileStroke4Ic,
  MintProfileStroke5Ic,
  MintProfileStroke6Ic,
  Profile1Ic,
  Profile2Ic,
  Profile3Ic,
  Profile4Ic,
  Profile5Ic,
  Profile6Ic,
  ProfileStroke1Ic,
  ProfileStroke2Ic,
  ProfileStroke3Ic,
  ProfileStroke4Ic,
  ProfileStroke5Ic,
  ProfileStroke6Ic,
} from "@assets/index";
import {
  MintProfile1Ic,
  MintProfile2Ic,
  MintProfile3Ic,
  MintProfile4Ic,
  MintProfile5Ic,
  MintProfile6Ic,
} from "@assets/index";
import { ProfileIconDataTypes } from "@common/types/CommonTypes";

export const profileIconsData: ProfileIconDataTypes[] = [
  {
    account: "me",
    profileIcon: [
      { emoji: "profile1", iconSrc: Profile1Ic, hoverIconSrc: ProfileStroke1Ic },
      { emoji: "profile2", iconSrc: Profile2Ic, hoverIconSrc: ProfileStroke2Ic },
      { emoji: "profile3", iconSrc: Profile3Ic, hoverIconSrc: ProfileStroke3Ic },
      { emoji: "profile4", iconSrc: Profile4Ic, hoverIconSrc: ProfileStroke4Ic },
      { emoji: "profile5", iconSrc: Profile5Ic, hoverIconSrc: ProfileStroke5Ic },
      { emoji: "profile6", iconSrc: Profile6Ic, hoverIconSrc: ProfileStroke6Ic },
    ],
  },
  {
    account: "partner",
    profileIcon: [
      { emoji: "profile1", iconSrc: MintProfile1Ic, hoverIconSrc: MintProfileStroke1Ic },
      { emoji: "profile2", iconSrc: MintProfile2Ic, hoverIconSrc: MintProfileStroke2Ic },
      { emoji: "profile3", iconSrc: MintProfile3Ic, hoverIconSrc: MintProfileStroke3Ic },
      { emoji: "profile4", iconSrc: MintProfile4Ic, hoverIconSrc: MintProfileStroke4Ic },
      { emoji: "profile5", iconSrc: MintProfile5Ic, hoverIconSrc: MintProfileStroke5Ic },
      { emoji: "profile6", iconSrc: MintProfile6Ic, hoverIconSrc: MintProfileStroke6Ic },
    ],
  },
];
