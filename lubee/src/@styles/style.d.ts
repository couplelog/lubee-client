import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow_700: string;
      yellow_600: string;
      yellow: string;
      yellow_400: string;
      yellow_300: string;
      yellow_200: string;
      yellow_100: string;
      yellow_50: string;

      mint: string;
      mint_400: string;
      mint_300: string;
      mint_200: string;
      mint_100: string;

      gray_900: string;
      gray_800: string;
      gray_700: string;
      gray_600: string;
      gray_500: string;
      gray_400: string;
      gray_200: string;
      gray_100: string;
      gray_50: string;

      white: string;
      red: string;
    };
    effects: {
      dimmed_40: string;
    };
    fonts: {
      Title_3: SerializedStyles;
      Title_2: SerializedStyles;
      Title_1: SerializedStyles;

      SubTitle: SerializedStyles;

      Body_4: SerializedStyles;
      Body_3: SerializedStyles;
      Body_2: SerializedStyles;
      Body_1: SerializedStyles;
      Body_0: SerializedStyles;

      Caption_2: SerializedStyles;
      Caption_1: SerializedStyles;
      Caption_0: SerializedStyles;

      Date_Indicator_1: SerializedStyles;
      Date_Indicator_2: SerializedStyles;
      Calendar_Honey: SerializedStyles;
      Calendar_Number_Body: SerializedStyles;
      Rewind: SerializedStyles;
    };
  }
}
