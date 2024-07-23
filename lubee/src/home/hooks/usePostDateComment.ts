import { useMutation } from "react-query";
import { postDateComment } from "../api/postDateComment";

export function usePostDateComment() {
  return useMutation(postDateComment, {
    // variables는 useMutation 훅의 mutate 함수에 전달되는 매개변수로, mutate 함수 호출 시 함께 전달된 데이터
    onSuccess: (data) => {
      console.log("전송 성공", data);
    },
    onError: (error: any) => {
      // AxiosError 객체에서 response.data를 추출하여 접근
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (
          errorData.success === false &&
          errorData.success_or_error_code &&
          errorData.success_or_error_code.status === 404
        ) {
          const message = errorData.success_or_error_code.message;
          console.log(message);
          alert(message); // alert 창으로 메시지 출력
        } else {
          console.log("전송 실패", error);
        }
      } else {
        console.log("전송 실패", error);
      }
    },
  });
}
