export interface EmojisDataTypes {
  emoji: string;
  iconSrc: string;
}

export interface ImagesDataTypes {
  date: number;
  imgSrc: string;
}

export interface ProfileIconDataTypes {
  account: string;
  profileIcon: EmojisDataTypes[];
}

export interface FinalEmojisDataTypes {
  account: string;
  emojiData: EmojisDataTypes[];
}
