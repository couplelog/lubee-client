import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CompanyText from "@common/components/CompanyText";
import { SymbolIc } from "assets";
/* 오늘의 꿀 조회로 1개, 5개일 때 congrats로 navigate*/
import { useGetTodayHoney } from "home/hooks/useGetTodayHoney";
import { getServerDate } from "@common/utils/dateFormat";

export default function index() {
  const navigate = useNavigate();
  const { data: totalHoney, isLoading, isFetching } = useGetTodayHoney(getServerDate());

  useEffect(() => {
    localStorage.getItem("currentPage");
  }, []);

  useEffect(() => {
    // 로딩 상태일 때 로딩 화면 표시
    if (isLoading || isFetching) {
      return;
    }
  }, [isLoading, isFetching]);

  useEffect(() => {
    if (!isLoading && !isFetching && totalHoney !== undefined) {
      const { response } = totalHoney;
      if (response === 1) {
        navigate("/congrats/first");
      } else if (response === 5) {
        navigate("/congrats/fifth");
      } else {
        const timer = setTimeout(() => {
          const prevPage = localStorage.getItem("currentPage");
          if (prevPage === "today") {
            navigate("/home/today");
          } else {
            navigate("/home/month");
          }
        }, 3000); // 3초 후에 홈 페이지로 이동

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
      }
    }
  }, [totalHoney, isLoading, isFetching, navigate]);

  return (
    <Wrapper>
      <LogoContainer>
        <SymbolIcon />
        <Text>loading...</Text>
      </LogoContainer>
      <CompanyText />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  margin-top: 27.8rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body_0};

  color: ${({ theme }) => theme.colors.gray_700};
`;

const SymbolIcon = styled(SymbolIc)`
  width: 4.6rem;
  height: 4.6rem;
`;
