import { ShortBorderIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import ContentContainer from "home/components/ContentContainer";

interface DateDetailModalProps {
  date: string;
  showCalendar: boolean;
  dayDto: MemoryBaseDtoDataTypes[];
  serverDate: string;
}

const DateDetailModal = forwardRef<HTMLDivElement, DateDetailModalProps>((props, ref) => {
  const { date, showCalendar, dayDto, serverDate } = props;

  return (
    <Background>
      <Container ref={ref} $showCalendar={showCalendar}>
        <Header>
          <ShortBorderIc />
          <Text>{date}</Text>
        </Header>
        <ContentContainer dayDto={dayDto} date={serverDate} />
      </Container>
    </Background>
  );
});

export default DateDetailModal;

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section<{ $showCalendar: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: ${(props) => (props.$showCalendar ? "none" : "absolute")};
  bottom: 0;
  max-height: 49rem;
  background-color: ${({ theme }) => theme.colors.white};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_800};
  ${({ theme }) => theme.fonts.Title_1};
`;
