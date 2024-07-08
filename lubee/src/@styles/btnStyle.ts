import { css } from "styled-components";

/*로그인 페이지, 온보딩 페이지 버튼 스타일*/
export const btnOnboardingStyle = css`
  align-items: center;
  width: 35rem;
  height: 5.2rem;
  border-radius: 10px;

  ${({ theme }) => theme.fonts.Title_1};
`;
