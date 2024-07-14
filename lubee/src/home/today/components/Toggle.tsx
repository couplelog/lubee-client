import { ToggleHoneyIc, TogglePastIc } from "@assets/index";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ToggleProps {
  handleCalendar: () => void;
  showCalendar: boolean;
}
export default function Toggle(props: ToggleProps) {
  const { handleCalendar, showCalendar } = props;
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
  }

  return (
    <Background>
      {!showCalendar && (
        <Container>
          <Today onClick={handleAddPicBtn}>
            <Text>오늘 기록</Text>
            <ToggleHoneyIcon />
            <FileInput
              type="file"
              ref={fileInputRef}
              multiple={false}
              onChange={handleFileInputChange}
              accept="image/gif,image/jpeg,image/png,image/jpg,image/webp,image/heic"
            />
          </Today>
          <Past onClick={handleCalendar}>
            <Text>과거 기록</Text>
            <TogglePastIcon />
          </Past>
        </Container>
      )}
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: absolute;
  right: 2rem;
  bottom: 15.1rem;
  padding: 1.2rem 1.6rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Today = styled.button`
  display: flex;
  gap: 3.6rem;
  align-items: center;
`;

const FileInput = styled.input`
  display: none;
`;

const Past = styled.button`
  display: flex;
  gap: 3.6rem;
  align-items: center;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Title_1};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const ToggleHoneyIcon = styled(ToggleHoneyIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const TogglePastIcon = styled(TogglePastIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
