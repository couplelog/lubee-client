import styled from "styled-components";
import { LocationPointIc } from "@assets/index";

interface LocationProps {
  location: string;
  setOpenLocationModal?: (open: boolean) => void;
}

export default function Location(props: LocationProps) {
  const { location, setOpenLocationModal } = props;

  return (
    <Container
      type="button"
      onClick={() => {
        if (setOpenLocationModal) {
          setOpenLocationModal(true);
        }
      }}>
      <LocationPointIcon />
      <LocationText>{location}</LocationText>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: auto;
  padding: 0.6rem 1.2rem;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;

const LocationPointIcon = styled(LocationPointIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const LocationText = styled.p`
  ${({ theme }) => theme.fonts.SubTitle};
`;
