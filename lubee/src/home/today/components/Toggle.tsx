import { ToggleTodayIc, TogglePastIc } from "assets/index";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { readPic } from "home/utils/readPic";

interface ToggleProps {
  handleCalendar: () => void;
  showCalendar: boolean;
  year: number;
  month: number;
  day: number;
}
export default function Toggle(props: ToggleProps) {
  const { handleCalendar, showCalendar, year, month, day } = props;
  const navigate = useNavigate();

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
        navigate("/upload", { state: { picSrc: picObj[0], year: year, month: month, day: day } }); //useLocation 사용하기 위해 state 전달
      };
    }
  };

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
              onChange={(event) => {
                uploadPic(event);
              }}
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
  padding: 1.2rem 1.4rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Today = styled.button`
  display: flex;
  gap: 1.8rem;
  align-items: center;
`;

const FileInput = styled.input`
  display: none;
`;

const Past = styled.button`
  display: flex;
  gap: 1.8rem;
  align-items: center;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Title_1};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const ToggleHoneyIcon = styled(ToggleTodayIc)`
  width: 2.5rem;
  height: 2.5rem;
`;

const TogglePastIcon = styled(TogglePastIc)`
  width: 2.5rem;
  height: 2.5rem;
`;
