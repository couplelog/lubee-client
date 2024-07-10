import styled from "styled-components";

export default function CompanyText() {
  return (
    <Footer>
      <Text>(C) COUPLE-LOGUE</Text>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  padding-bottom: 1.4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};
`;
