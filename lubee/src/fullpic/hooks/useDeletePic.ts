import { useMutation } from "react-query";
import { deletePic } from "fullpic/api/deletePic";

export function useDeletePic() {
  return useMutation((memory_id: number) => deletePic({ memory_id }), {
    onSuccess: () => {
      console.log("사진 삭제 성공");
    },
    onError: (error) => {
      console.log("사진 삭제 실패", error);
    },
  });
}
