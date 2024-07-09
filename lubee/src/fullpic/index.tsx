import { Outlet } from "react-router-dom";
import styled from "styled-components";
import FullpicHeader from "./components/FullpicHeader";
import DeletePicModal from "./components/DeletePicModal";
import { useState } from "react";

export default function index() {
  const [openDeletePicModal, setOpenDeletePicModal] = useState<boolean>(false);

  function handleTrashBtn(open: boolean) {
    setOpenDeletePicModal(open);
  }

  return (
    <Container>
      <FullpicHeader handleTrashBtn={handleTrashBtn} />
      <Outlet />
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
`;
