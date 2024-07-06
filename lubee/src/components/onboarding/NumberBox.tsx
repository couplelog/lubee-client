import styled from "styled-components";
import { flexCenter } from "styles/globalStyle";

interface NumberBoxProps {
  children: React.ReactNode;
}

export default function NumberBox(props: NumberBoxProps) {
  const { children } = props;

  return <Box>{children}</Box>;
}

const Box = styled.div`
  ${flexCenter}

  padding: 5px 10px;
  border-radius: 5px;

  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme }) => theme.colors.yellow_600};
  cursor: pointer;
`;
