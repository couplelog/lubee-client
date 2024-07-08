import { SearchIc, XIc } from "@assets/index";
import { locationData } from "@common/core/locationData";
import styled from "styled-components";

interface SelectLocationModalProps {
  setOpenLocationModal: (open: boolean) => void;
  setLocation: (location: string) => void;
}

export default function SelectLocationModal(props: SelectLocationModalProps) {
  const { setOpenLocationModal, setLocation } = props;

  function closeLocationModal(locationName?: string) {
    setOpenLocationModal(false);
    if (locationName) {
      setLocation(locationName);
    }
  }

  return (
    <Background>
      <Container>
        <Header>
          <Text>위치설정</Text>
          <BtnWrapper type="button" onClick={() => closeLocationModal()}>
            <XIcon />
          </BtnWrapper>
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
              const { name, distance, info } = data;
              return (
                <LocationBox key={name} type="button" onClick={() => closeLocationModal(name)}>
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
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 0 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  gap: 12.95rem;
  justify-content: flex-end;
  align-items: center;
  padding: 1.6rem 2rem 2rem 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_800};
  ${({ theme }) => theme.fonts.Title_1};
`;

const XIcon = styled(XIc)`
  width: 1.6rem;
  height: 1.6rem;
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

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const Locations = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  max-height: 26.8rem;
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
