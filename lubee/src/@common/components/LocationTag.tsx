import styled from "styled-components";
import { LocationPointIc, LocationPointSmallIc } from "assets/index";
import { useState } from "react";

interface LocationProps {
  location: string;
  font: string;
}

interface StyleProps {
  $font: string;
}

export default function LocationTag(props: LocationProps) {
  const { location, font } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container $font={font} onClick={toggleExpand}>
      {font === "fullPic" ? <LocationPointIcon /> : <LocationPointSmallIcon />}
      <LocationText $font={font}>{location}</LocationText>
    </Container>
  );
}

const Container = styled.div<{ $font: string }>`
  display: flex;
  gap: ${(props) => (props.$font === "fullPic" ? "0.8rem" : "0.4rem")};
  align-items: center;
  width: ${(props) => (props.$font === "fullPic" ? "auto" : "auto")};
  max-width: ${(props) => (props.$font === "fullPic" ? "none" : "9.7rem")};
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

// Helper function to apply conditional styles
const applyConditionalStyles = ({ $font }: StyleProps) => {
  if ($font !== "fullPic") {
    return `
      display: -webkit-box;
      overflow: hidden;
      max-width: 9.7rem;
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
