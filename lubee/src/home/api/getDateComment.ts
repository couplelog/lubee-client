import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface DateCommentDataTypes {
  userId: number;
  content: string;
}

// 코멘트의 id를 넘겨주기
interface GetDateCommentRequest {
  id: number;
}

// GET 요청에서는 보통 요청 바디를 사용하지 않음
// 그래서 쿼리 파라미터로 id를 전달
export async function getDateComment(request: GetDateCommentRequest) {
  const { data } = await api.get<Response<DateCommentDataTypes[]>>(`/api/couples/lubee-code`, {
    params: { id: request.id },
  });
  return data;
}
