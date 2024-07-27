import { profileIconsData } from "@common/core/profileIconsData";
import blankImg from "assets/image/blankImg.png";
const getHoverProfileIconSrc = (account: string, emoji: string) => {
  const accountData = profileIconsData.find((data) => data.account === account);
  if (accountData) {
    const iconData = accountData.profileIcon.find((icon) => icon.emoji === emoji);
    return iconData ? iconData.hoverIconSrc : blankImg;
  }
  return blankImg;
};

export default getHoverProfileIconSrc;
