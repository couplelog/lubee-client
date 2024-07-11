import { BackIc, TrashIc } from "@assets/index";
import styled from "styled-components";

interface FullpicHeaderProps {
  handleTrashBtn: (open: boolean) => void;
}
export default function FullpicHeader(props: FullpicHeaderProps) {
  const { handleTrashBtn } = props;

  return (
    <DateBar>
      <BackIcon />
      <Date>6월 19일 수요일</Date>
      <BtnWrapper
        type="button"
        onClick={() => {
          handleTrashBtn(true);
        }}>
        <TrashIcon />
      </BtnWrapper>
    </DateBar>
  );
}

const DateBar = styled.div`
  display: flex;
  gap: 4.2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem 0;
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

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
