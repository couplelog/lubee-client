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
  const { refetch: refetchHoney } = useGetTodayHoney(getServerDate()); // refetch: refetchHoney: 데이터를 다시 가져오는 함수로, useEffect 훅 내에서 사용

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        // 꿀 개수를 불러옴
        // refetchHoney 함수는 비동기 함수로, 데이터를 다시 가져옴
        const { data: updatedHoney } = await refetchHoney();
        if (updatedHoney !== undefined) {
          const { response } = updatedHoney;

          // 꿀 개수에 따라 다른 화면으로 이동
          if (response === 1) {
            navigate("/congrats/first");
          } else if (response === 5) {
            navigate("/congrats/fifth");
          } else {
            const prevPage = localStorage.getItem("currentPage");
            if (prevPage === "today") {
              navigate("/home/today");
            } else {
              navigate("/home/month");
            }
          }
        }
      } catch (error) {
        console.error("꿀 개수를 불러오는 중 오류 발생:", error);
        // 오류가 발생한 경우 기본 페이지로 이동
        const prevPage = localStorage.getItem("currentPage");
        if (prevPage === "today") {
          navigate("/home/today");
        } else {
          navigate("/home/month");
        }
      }
    }, 3000); // 3초 후에 꿀 개수를 불러와서 화면 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate, refetchHoney]);

  // 무조건 기본으로 로딩 화면을 표시
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
