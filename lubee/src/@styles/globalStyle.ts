import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
${reset}

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

html, #root{
  height: 100dvh;
}

body{
  height: 100%;
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
    font-family: Pretendard-Regular;
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
    font-weight: normal;
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
