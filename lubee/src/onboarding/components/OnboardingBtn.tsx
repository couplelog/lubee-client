import styled from "styled-components";
import { btnOnboardingStyle } from "@styles/btnStyle";

interface OnboardingBtnProps {
  handleOnboardingBtn?: () => void;
  text: string;
  $disabled: boolean;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { handleOnboardingBtn, text, $disabled } = props;

  return (
    <Button
      $disabled={$disabled}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p>{text}</p>
    </Button>
  );
}

const Button = styled.button<{ $disabled: boolean }>`
  ${btnOnboardingStyle}

  position: absolute;
  bottom: 1.4rem;
  background-color: ${({ $disabled, theme }) => ($disabled ? theme.colors.gray_200 : theme.colors.gray_800)};
  color: ${({ theme }) => theme.colors.gray_50};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;
