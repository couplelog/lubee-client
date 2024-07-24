import styled from "styled-components";
import blankImg from "@assets/image/blankImg.png";
import { useState, useRef } from "react";
import { readPic } from "home/utils/readPic";
import { useNavigate } from "react-router-dom";

interface BlankImgBtnProps {
  date?: number;
}

export default function BlankImgBtn(props: BlankImgBtnProps) {
  const navigate = useNavigate();
  const { date } = props;

  /* 사진 업로드 */
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [, setPicSrc] = useState<File>();
  const [, setVerified] = useState(true);

  function handleAddPicBtn() {
    fileInputRef.current && fileInputRef.current.click();
  }

  const uploadPic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const picObj = event.target.files;

    readPic({ input: picObj, setPicSrc: setPicSrc, setVerified: setVerified });
    if (picObj && picObj[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(picObj[0]);
      reader.onloadend = () => {
        navigate("/upload", { state: { picSrc: picObj[0] } }); //useLocation 사용하기 위해 state 전달
      };
    }
  };

  return (
    <Container type="button" key={date} onClick={handleAddPicBtn}>
      <img src={blankImg} />
      <FileInput
        type="file"
        ref={fileInputRef}
        multiple={false}
        onChange={(event) => {
          uploadPic(event);
        }}
        accept="image/gif,image/jpeg,image/png,image/jpg,image/webp,image/heic"
      />
    </Container>
  );
}

const Container = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

const FileInput = styled.input`
  display: none;
`;
