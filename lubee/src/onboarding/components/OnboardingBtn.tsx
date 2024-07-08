import styled from "styled-components";
import { btnOnboardingStyle } from "@styles/btnStyle";
import { useNavigate } from "react-router-dom";

interface OnboardingBtnProps {
  handleOnboardingBtn?: () => void;
  text: string;
  $disabled: boolean;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, $disabled } = props;
  const navigate = useNavigate();

  return (
    <Button
      $disabled={$disabled}
      onClick={() => {
        $disabled ? undefined : navigate("/signup");
      }}>
      <p>{text}</p>
    </Button>
  );
}

const Button = styled.button<{ $disabled: boolean }>`
  ${btnOnboardingStyle}
  background-color: ${({ $disabled, theme }) => ($disabled ? theme.colors.gray_200 : theme.colors.gray_800)};
  color: ${({ theme }) => theme.colors.gray_50};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;
