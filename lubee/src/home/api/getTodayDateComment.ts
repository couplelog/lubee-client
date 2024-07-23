import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface TodayDateCommentDataTypes {
  userId: number;
  content: string;
}

// userId, coupleId, date 넘겨주기
interface GetTodayDateCommentRequest {
  userId: number;
  coupleId: number;
  date: string;
}

// GET 요청에서는 보통 요청 바디를 사용하지 않음
// 그래서 쿼리 파라미터로 전달
export async function getTodayDateComment(request: GetTodayDateCommentRequest) {
  const { data } = await api.get<Response<TodayDateCommentDataTypes[]>>(`/api/datecomments/today`, {
    params: { userId: request.userId, coupleId: request.coupleId, date: request.date },
  });
  return data;
}
