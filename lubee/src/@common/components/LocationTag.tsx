import styled from "styled-components";
import { LocationPointIc, LocationPointSmallIc } from "assets/index";

interface LocationProps {
  location: string;
  font: string;
}

interface StyleProps {
  $font: string;
}

export default function LocationTag(props: LocationProps) {
  const { location, font } = props;

  return (
    <Container $font={font}>
      {font === "fullPic" ? <LocationPointIcon /> : <LocationPointSmallIcon />}
      <TextBox>
        <LocationText $font={font}>{location}</LocationText>
      </TextBox>
    </Container>
  );
}

const Container = styled.div<{ $font: string }>`
  display: flex;
  gap: ${(props) => (props.$font === "fullPic" ? "0.8rem" : "0.4rem")};
  align-items: center;
  width: ${(props) => (props.$font === "fullPic" ? "auto" : "auto")};
  padding: ${(props) => (props.$font === "fullPic" ? "0.6rem 1.2rem" : "0.2rem 0.5rem")};
  border-radius: 32px;
  background-color: ${({ theme, $font }) => ($font === "fullPic" ? theme.colors.gray_100 : theme.colors.gray_50)};
`;

const LocationPointIcon = styled(LocationPointIc)`
  width: 1.8rem;
  height: 1.8rem;
`;

const LocationPointSmallIcon = styled(LocationPointSmallIc)`
  width: 0.98rem;
  height: 0.98rem;
`;

const applyConditionalStyles = ({ $font }: StyleProps) => {
  if ($font !== "fullPic") {
    return `
      display: -webkit-box;
      overflow: hidden;
      max-width: 7.4rem;
      word-wrap: break-word;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis; /* Ellipsis when overflowing */
    `;
  }
  return "";
};

const LocationText = styled.p<{ $font: string }>`
  ${({ theme, $font }) => ($font === "fullPic" ? theme.fonts.SubTitle : theme.fonts.Caption_1)};

  color: ${({ theme, $font }) => ($font === "fullPic" ? theme.colors.gray_800 : theme.colors.gray_500)};
  text-align: left;
  vertical-align: middle;

  ${({ $font }) => applyConditionalStyles({ $font })}
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
`;
