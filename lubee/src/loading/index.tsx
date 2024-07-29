import { useEffect, useState } from "react";
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
  const [previousHoney, setPreviousHoney] = useState<number | null>(() => {
    const savedHoney = localStorage.getItem("previousHoney");
    return savedHoney !== null ? JSON.parse(savedHoney) : null;
  });

  useEffect(() => {
    const fetchHoney = async () => {
      // 꿀 개수를 불러옴
      // refetchHoney 함수는 비동기 함수로, 데이터를 다시 가져옴
      try {
        const { data: updatedHoney } = await refetchHoney();
        if (updatedHoney !== undefined) {
          const { response } = updatedHoney;
          console.log("Fetched honey count:", response);
          console.log("Previous honey count:", previousHoney);

          if (previousHoney === null) {
            setPreviousHoney(response);
            localStorage.setItem("previousHoney", JSON.stringify(response));
            return;
          }

          if (response > previousHoney) {
            // 꿀 개수가 이전보다 증가한 경우
            console.log("Honey count increased:", previousHoney, "->", response);
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
          } else {
            const prevPage = localStorage.getItem("currentPage");
            if (prevPage === "today") {
              navigate("/home/today");
            } else {
              navigate("/home/month");
            }
          }
          // 이전 꿀 개수 업데이트
          setPreviousHoney(response);
          localStorage.setItem("previousHoney", JSON.stringify(response));
        }
      } catch (error) {
        // 오류가 발생한 경우 기본 페이지로 이동
        console.error("Error fetching honey count:", error);
        const prevPage = localStorage.getItem("currentPage");
        if (prevPage === "today") {
          navigate("/home/today");
        } else {
          navigate("/home/month");
        }
      }
    };

    const timer = setTimeout(fetchHoney, 2000); // 2초 후에 꿀 개수를 불러와서 화면 이동. 2초 기다린 후 꿀 개수 불러오는 데 추가로 더 걸려서 수정...

    return () => clearTimeout(timer);
  }, [navigate, refetchHoney, previousHoney]);

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
