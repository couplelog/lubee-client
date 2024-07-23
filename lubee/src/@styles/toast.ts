import { ToastContainer } from "react-toastify";
import { styled } from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  justify-content: center;
  margin-bottom: 39.5rem;

  .Toastify__toast {
    width: 26.8rem;
    height: 4.9rem;
    border-radius: 8.121px;
    background-color: ${({ theme }) => theme.colors.gray_700};
    box-shadow:
      0 4.061px 8.121px 3.045px rgb(0 0 0 / 15%),
      0 1.015px 3.045px 0 rgb(0 0 0 / 30%);
    color: ${({ theme }) => theme.colors.gray_50};
    text-align: center;
    ${({ theme }) => theme.fonts.Caption_2};
  }
`;
