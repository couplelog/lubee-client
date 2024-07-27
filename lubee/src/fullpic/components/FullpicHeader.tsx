import { BackIc, TrashIc } from "assets/index";
import { BtnWrapper } from "@styles/btnStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
interface FullpicHeaderProps {
  handleTrashBtn: (open: boolean) => void;
  headerDate: string;
}
export default function FullpicHeader(props: FullpicHeaderProps) {
  const { handleTrashBtn, headerDate } = props;
  const navigate = useNavigate();

  function moveToHome() {
    // 헤더에서 전에 어떤 페이지였는지 불러오기
    const prevPage = localStorage.getItem("currentPage");

    if (prevPage === "today") {
      navigate("/home/today");
      console.log(prevPage);
    } else {
      navigate("/home/month");
      console.log(prevPage);
    }
  }

  return (
    <DateBar>
      <BtnWrapper type="button" onClick={moveToHome}>
        <BackIcon />
      </BtnWrapper>
      <Date>{headerDate}</Date>
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
