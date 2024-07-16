export interface EmojiTypes {
  emoji: string;
  iconSrc: string;
}

export interface FullPicDataTypes {
  id: number;
  time: string;
  picSrc: string;
  location: string;
  name: string;
  account: string;
}

export interface ProfileIconDataTypes {
  account: string;
  profileIcon: EmojiTypes[];
}

export interface TitleBoxProps {
  titleText: string;
  subtitleText?: string;
}

export interface EmojisDataTypes {
  account: string;
  emojiData: EmojiTypes[];
}

export interface ProfileCustomDataTypes {
  default: string;
  selected: string;
}
