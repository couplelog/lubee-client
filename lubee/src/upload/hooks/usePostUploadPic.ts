import { useMutation } from "react-query";
import { postUploadPic } from "upload/api/postUploadPic";

export function usePostUploadPic() {
  return useMutation(postUploadPic, {
    onSuccess: () => {
      console.log("업로드 성공");
    },
    onError: (error) => {
      console.log("업로드 실패", error);
    },
  });
}
