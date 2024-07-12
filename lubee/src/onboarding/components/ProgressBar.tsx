import styled from "styled-components";
import { ProgressBar1Ic, ProgressBar2Ic, ProgressBar3Ic, ProgressBar4Ic } from "@assets/index";

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
      case 4:
        return <ProgressBar4Icon />;
      default:
        return null;
    }
  };

  return <Wrapper>{renderProgressBarIcon()}</Wrapper>;
}

const Wrapper = styled.section`
  position: absolute;
  top: 6rem;
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

const ProgressBar4Icon = styled(ProgressBar4Ic)`
  width: 5.9rem;
  height: 1.9rem;
`;
