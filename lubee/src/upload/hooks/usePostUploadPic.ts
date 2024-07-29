import { useMutation } from "react-query";
import { postUploadPic, PostUploadPicDataTypes } from "upload/api/postUploadPic";

export function usePostUploadPic() {
  return useMutation((data: PostUploadPicDataTypes) => postUploadPic(data), {
    onSuccess: async () => {
      console.log("업로드 성공");
    },
    onError: (error) => {
      console.log("업로드 실패", error);
    },
  });
}
