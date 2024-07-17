import styled from "styled-components";
import { useState } from "react";
import AlbumsContainer from "./AlbumsContainer";
import SaveContainer from "./SaveContainer";

export default function TabBar() {
  const [currentTab, setCurrentTab] = useState("album");

  return (
    <>
      <Container>
        <Album type="button" onClick={() => setCurrentTab("album")} $currentTab={currentTab}>
          앨범
        </Album>
        <Save type="button" onClick={() => setCurrentTab("save")} $currentTab={currentTab}>
          저장
        </Save>
      </Container>
      <ContentWrapper>
        {currentTab === "album" && <AlbumsContainer />}
        {currentTab === "save" && <SaveContainer />}
      </ContentWrapper>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  padding: 1.3rem 0 2.3rem;
`;

const Album = styled.button<{ $currentTab: string }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 32px;
  ${({ theme }) => theme.fonts.Title_1};

  background-color: ${({ theme, $currentTab }) =>
    $currentTab === "album" ? theme.colors.gray_600 : theme.colors.gray_50};
  color: ${({ theme, $currentTab }) => ($currentTab === "album" ? theme.colors.white : theme.colors.gray_800)};
`;

const Save = styled.button<{ $currentTab: string }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 32px;
  ${({ theme }) => theme.fonts.Title_1};

  background-color: ${({ theme, $currentTab }) =>
    $currentTab === "save" ? theme.colors.gray_600 : theme.colors.gray_50};
  color: ${({ theme, $currentTab }) => ($currentTab === "save" ? theme.colors.white : theme.colors.gray_800)};
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.2rem;
`;
