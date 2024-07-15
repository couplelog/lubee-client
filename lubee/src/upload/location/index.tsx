import styled from "styled-components";
import { BackIc } from "@assets/index";
import { SearchIc } from "@assets/index";
import { locationData } from "@common/core/locationData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BtnWrapper } from "@styles/btnStyle";

interface LocationProps {
  setLocation: (location: string) => void;
  moveToUploadPic: () => void;
}

export default function index(props: LocationProps) {
  const { setLocation, moveToUploadPic } = props;
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("currentPage");
  }, []);

  function handleSelectLocation(locationName?: string) {
    if (locationName) {
      setLocation(locationName);
      moveToUploadPic();
    }
  }

  function moveToHome() {
    // 헤더에서 전에 어떤 페이지였는지 불러오기
    const prevPage = localStorage.getItem("currentPage");

    if (prevPage === "today") {
      navigate("/home/today");
    } else {
      navigate("/home/month");
    }
  }

  return (
    <Container>
      <Header>
        <BtnWrapper type="button" onClick={moveToHome}>
          <BackIcon />
        </BtnWrapper>
        <Text>위치 설정</Text>
      </Header>
      <SearchBar>
        <SearchInput />
        <SearchButton type="button">
          <SearchIcon />
        </SearchButton>
      </SearchBar>
      <Locations>
        {locationData &&
          locationData.map((data) => {
            const { id, name, distance, info } = data;
            return (
              <LocationBox key={id} type="button" onClick={() => handleSelectLocation(name)}>
                <Name>{name}</Name>
                <Details>
                  <Distance>{`${distance}m,`}</Distance>
                  <Info>{info}</Info>
                </Details>
              </LocationBox>
            );
          })}
      </Locations>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  gap: 4.2rem;
  align-items: center;
  width: 100%;
  padding: 2rem 8.6rem 2rem 2rem;
`;

const BackIcon = styled(BackIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21.8rem;
  color: ${({ theme }) => theme.colors.gray_800};
  ${({ theme }) => theme.fonts.Body_4};
`;

const SearchBar = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 2rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.7rem 2rem 0.7rem 5.4rem;
  border: none;
  border-radius: 46px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  ${({ theme }) => theme.fonts.Body_2};

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 3.4rem;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transform: translateY(-50%);
`;

const SearchIcon = styled(SearchIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Locations = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  scrollbar-width: none;
`;

const LocationBox = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 2rem 6.4rem 2rem 2.4rem;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Body_2};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const Details = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Distance = styled.p`
  ${({ theme }) => theme.fonts.Body_1};

  color: ${({ theme }) => theme.colors.gray_500};
`;

const Info = styled.p`
  ${({ theme }) => theme.fonts.Body_1};

  color: ${({ theme }) => theme.colors.gray_500};
`;
