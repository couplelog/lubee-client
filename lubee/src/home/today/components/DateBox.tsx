import styled from "styled-components";
import { getCurrentDate } from "@common/utils/dateFormat";

export default function DateBox() {
  return (
    <Container>
      <DateText>{getCurrentDate()}</DateText>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;

const DateText = styled.p`
  ${({ theme }) => theme.fonts.Ginto_16};

  color: ${({ theme }) => theme.colors.gray_600};
`;
