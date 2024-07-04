import { css, DefaultTheme } from "styled-components";

const colors = {
  yellow_700: "#CC8200",
  yellow_600: "#EB9500",
  yellow: "#FFAD1E",
  yellow_400: "#FFC052",
  yellow_300: "#FFD285",
  yellow_200: "#FFE5B8",
  yellow_100: "#FFECCC",
  yellow_50: "#FFF5E4",

  mint: "#35D0BA",
  mint_400: "#7EE3D5",
  mint_300: "#B2EDE3",
  mint_200: "#DDF6F6",
  mint_100: "#EEF9F9",

  gray_900: "#1B1D1F",
  gray_800: "#24282D",
  gray_700: "#303539",
  gray_600: "#454C53",
  gray_500: "#6C7885",
  gray_400: "#9EA4AA",
  gray_200: "#C9CDD2",
  gray_100: "#E8EBED",
  gray_50: "#F7F8F9",

  white: "#FFF",
  red: "#FA000A",
};

const fonts = {
  Title_3: css`
    font-family: Pretendard;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.64rem;
  `,

  Title_2: css`
    font-family: Pretendard;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
  `,

  Title_1: css`
    font-family: Pretendard;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.8rem;
  `,

  SubTitle: css`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.4rem;
  `,

  Body_4: css`
    font-family: Pretendard;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.4rem;
  `,

  Body_3: css`
    font-family: Pretendard;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
  `,

  Body_2: css`
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.82rem;
  `,

  Body_1: css`
    font-family: Pretendard;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
  `,

  /*맹꽁이 님과 387일 째 꿀 모으는 날에 해당하는 글씨체인듯*/
  Body_0: css`
    font-family: Pretendard;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.64rem;
  `,

  Caption_2: css`
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
  `,

  Caption_1: css`
    font-family: Pretendard;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6rem;
  `,

  Caption_0: css`
    font-family: Pretendard;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3rem;
  `,

  Ginto_16: css`
    font-family: Pretendard;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.24rem;
  `,

  Ginto_18: css`
    font-family: Pretendard;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.2rem;
  `,
};

const effects = {
  dimmed_40: `
  background: rgba(0, 0, 0, 0.40)`,
};

const theme: Pick<DefaultTheme, "colors" | "fonts" | "effects"> = {
  colors,
  fonts,
  effects,
};

export default theme;
