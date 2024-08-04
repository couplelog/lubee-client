import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
${reset}

/* 사파리 웹 뷰 브라우저 상속 스타일 제거 */
input, textarea,button {
  border-radius: 0;
  appearance: none;
}

html, #root{
  height: 100dvh;
}

a{
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

html, body{
  overflow-x :  hidden;
  background-color: ${({ theme }) => theme.colors.gray_50};
}

#root, body, html {
  max-width: 39rem;
  margin: 0 auto;
  padding:0;
  font-size: 62.5%;
  -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
  scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */

  /* 버튼 클릭 시 색 제거 */

  /* -webkit-tap-highlight-color: rgba(0,0,0,0); */
}

#root::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

html {
  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf') format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf') format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.ttf') format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('https://raw.githubusercontent.com/blaisck/sfwin/master/SFPro/TrueType/SFProDisplay-Medium.ttf');
    font-style: normal;
    font-weight: 400;
  }
}
`;

export default GlobalStyle;
