import { useMutation } from "react-query";
import { postLubeeCode } from "../api/postLubeeCode";

export function usePostLubeeCode(onSuccessCallback: () => void) {
  return useMutation(postLubeeCode, {
    onSuccess: (data) => {
      console.log("커플 연결 성공", data);
      onSuccessCallback(); // 성공 시 콜백 함수(custom 페이지로 넘어가는 함수) 호출
    },
    onError: (error: any) => {
      // AxiosError 객체에서 response.data를 추출하여 접근
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (
          errorData.success === false &&
          errorData.success_or_error_code &&
          (errorData.success_or_error_code.status === 400 || errorData.success_or_error_code.status === 404)
        ) {
          const message = errorData.success_or_error_code.message;
          console.log(message);
          alert(message); // alert 창으로 메시지 출력
        } else {
          console.log("커플 연결 실패", error);
        }
      } else {
        console.log("커플 연결 실패", error);
      }
    },
  });
}
