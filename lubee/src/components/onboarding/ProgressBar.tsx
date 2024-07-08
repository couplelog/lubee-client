import styled from "styled-components";
import { ProgressBar1Ic } from "@assets/index";
import { ProgressBar2Ic } from "@assets/index";
import { ProgressBar3Ic } from "@assets/index";

interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  const renderProgressBarIcon = () => {
    switch (step) {
      case 1:
        return <ProgressBar1Icon />;
      case 2:
        return <ProgressBar2Icon />;
      case 3:
        return <ProgressBar3Icon />;
      default:
        return null;
    }
  };

  return <Wrapper>{renderProgressBarIcon()}</Wrapper>;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin: 1.1rem 0 3rem;
`;

const ProgressBar1Icon = styled(ProgressBar1Ic)`
  width: 5.9rem;
  height: 1.9rem;
`;

const ProgressBar2Icon = styled(ProgressBar2Ic)`
  width: 5.9rem;
  height: 1.9rem;
`;

const ProgressBar3Icon = styled(ProgressBar3Ic)`
  width: 5.9rem;
  height: 1.9rem;
`;
