import { infoToast } from "@common/utils/toast";

export interface readPicProps {
  input: FileList | null;
  setPicSrc: React.Dispatch<React.SetStateAction<File | undefined>>;
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

export const readPic = ({ input, setPicSrc, setVerified }: readPicProps) => {
  // 인풋 태그에 파일이 있는 경우
  if (input && input[0]) {
    // FileReader 인스턴스 생성
    const reader = new FileReader();
    // reader가 이미지 읽도록 하기
    reader.readAsDataURL(input[0]);
    setPicSrc(input[0]);
    setVerified(false);
    infoToast("사진 등록 성공");
  }
};
