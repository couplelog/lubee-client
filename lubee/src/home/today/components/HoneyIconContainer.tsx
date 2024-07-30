import styled from "styled-components";
import { TodayHoney0Ic, TodayHoney1Ic, TodayHoney2Ic, TodayHoney3Ic, TodayHoney4Ic, TodayHoney5Ic } from "assets/index";

interface HoneyIconContainerProps {
  honey: number;
}

export default function HoneyIconContainer(props: HoneyIconContainerProps) {
  const { honey } = props;

  const renderHoneyIcon = () => {
    switch (honey) {
      case 0:
        return <Honey0Icon />;
      case 1:
        return <Honey1Icon />;
      case 2:
        return <Honey2Icon />;
      case 3:
        return <Honey3Icon />;
      case 4:
        return <Honey4Icon />;
      case 5:
        return <Honey5Icon />;
      default:
        return null;
    }
  };

  return <Container>{renderHoneyIcon()}</Container>;
}

const Container = styled.section`
  display: flex;
  padding-top: 5.6rem;
`;

const Honey0Icon = styled(TodayHoney0Ic)`
  width: 12rem;
  height: 2.4rem;
`;

const Honey1Icon = styled(TodayHoney1Ic)`
  width: 12rem;
  height: 2.4rem;
`;

const Honey2Icon = styled(TodayHoney2Ic)`
  width: 12rem;
  height: 2.4rem;
`;

const Honey3Icon = styled(TodayHoney3Ic)`
  width: 12rem;
  height: 2.4rem;
`;

const Honey4Icon = styled(TodayHoney4Ic)`
  width: 12rem;
  height: 2.4rem;
`;

const Honey5Icon = styled(TodayHoney5Ic)`
  width: 12rem;
  height: 2.4rem;
`;
