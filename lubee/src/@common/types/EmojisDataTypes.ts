export interface EmojisDataTypes {
  emoji: string;
  iconSrc: string;
}

export interface FullPicDataTypes {
  time: string;
  picSrc: string;
  location: string;
  name: string;
  account: string;
}

export interface ProfileIconDataTypes {
  account: string;
  profileIcon: EmojisDataTypes[];
}

export interface TitleBoxProps {
  titleText: string;
  subtitleText?: string;
}

export interface FinalEmojisDataTypes {
  account: string;
  emojiData: EmojisDataTypes[];
}
