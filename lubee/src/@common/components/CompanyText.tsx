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
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};
`;
