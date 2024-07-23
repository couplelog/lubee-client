import styled from "styled-components";

export default function DateBox() {
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}. ${month}. ${day}`;
  }

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
