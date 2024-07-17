import styled from "styled-components";
import blankImg from "@assets/image/blankImg.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MypageBlankImgBtn() {
  //const setUploadLocation = useSetRecoilState(uploadLocationState);
  const [isFile, setIsFile] = useState<File[] | null>(null);

  /* 사진 업로드 */
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  function saveFile(imageFile: File[]) {
    setIsFile(imageFile);
    // setUploadLocation(true);
    navigate("/upload");
  }
  function handleAddPicBtn() {
    fileInputRef.current && fileInputRef.current.click();
  }
  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      saveFile(fileList);
    }
    console.log(isFile);
  }

  return (
    <Container type="button" onClick={handleAddPicBtn}>
      <img src={blankImg} />
      <FileInput
        type="file"
        ref={fileInputRef}
        multiple={false}
        onChange={handleFileInputChange}
        accept="image/gif,image/jpeg,image/png,image/jpg,image/webp,image/heic"
      />
    </Container>
  );
}

const Container = styled.button`
  width: fit-content;
  padding: 0;
  border: none;
  background: none;
`;

const FileInput = styled.input`
  display: none;
`;
