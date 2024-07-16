import { ProfileCustomDataTypes } from "@common/types/CommonTypes";

import {
  MintProfile1Ic,
  MintProfile2Ic,
  MintProfile3Ic,
  MintProfile4Ic,
  MintProfile5Ic,
  MintProfile6Ic,
  MintProfileStroke1Ic,
  MintProfileStroke2Ic,
  MintProfileStroke3Ic,
  MintProfileStroke4Ic,
  MintProfileStroke5Ic,
  MintProfileStroke6Ic,
} from "@assets/index";

export const MintProfileCustomData: ProfileCustomDataTypes[] = [
  { default: MintProfile1Ic, selected: MintProfileStroke1Ic },
  { default: MintProfile2Ic, selected: MintProfileStroke2Ic },
  { default: MintProfile3Ic, selected: MintProfileStroke3Ic },
  { default: MintProfile4Ic, selected: MintProfileStroke4Ic },
  { default: MintProfile5Ic, selected: MintProfileStroke5Ic },
  { default: MintProfile6Ic, selected: MintProfileStroke6Ic },
];
