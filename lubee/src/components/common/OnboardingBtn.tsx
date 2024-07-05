import styled from "styled-components";
import { BtnOnboarding } from "@styles/BtnStyle";
import { useNavigate } from "react-router-dom";
interface OnboardingBtnProps {
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

const Button = styled(BtnOnboarding)<{ $disabled: boolean }>`
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.gray_200 : theme.colors.gray_800};
  color: ${({ theme }) => theme.colors.gray_50};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;
