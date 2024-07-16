import styled from "styled-components";
import HomePicBox from "home/components/HomePicBox";

export default function AlbumContainer() {
  return (
    <Wrapper>
      <HomePicBox url="/date/index" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;
