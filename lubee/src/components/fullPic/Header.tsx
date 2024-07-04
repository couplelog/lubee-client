import { BackIc, TrashIc } from "@assets/index";
import styled from "styled-components";

interface HeaderProps {
  openTrash: (open: boolean) => void;
}
export default function Header(props: HeaderProps) {
  const { openTrash } = props;

  return (
    <Wrapper>
      <DateBar>
        <BackIcon />
        <Date>6월 19일 수요일</Date>
        <BtnWrapper
          type="button"
          onClick={() => {
            openTrash(true);
          }}>
          <TrashIcon />
        </BtnWrapper>
      </DateBar>
      <Time>오후 2:17</Time>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 0;
`;

const DateBar = styled.div`
  display: flex;
  gap: 4.2rem;
  justify-content: space-between;
  width: 100%;
`;

const BackIcon = styled(BackIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Date = styled.p`
  ${({ theme }) => theme.fonts.Body_4}

  color: ${({ theme }) => theme.colors.gray_800};
`;

const TrashIcon = styled(TrashIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Time = styled.p`
  ${({ theme }) => theme.fonts.Body_3}

  color: ${({ theme }) => theme.colors.gray_500};
`;

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
