import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface TodayDateCommentDataTypes {
  userId: number;
  content: string;
  profile: string | null;
}

interface GetTodayDateCommentRequest {
  coupleId: number;
  date: string;
}

interface GetTodayDateCommentResponse {
  mine: TodayDateCommentDataTypes;
  lover: TodayDateCommentDataTypes | null;
}

// GET 요청에서는 보통 요청 바디를 사용하지 않음
// 그래서 쿼리 파라미터로 전달
export async function getTodayDateComment(request: GetTodayDateCommentRequest) {
  const { data } = await api.get<Response<GetTodayDateCommentResponse>>(`/api/datecomments/today`, {
    params: { coupleId: request.coupleId, date: request.date },
  });

  // data.response에 접근하여 mine과 lover 데이터를 추출
  const { mine, lover } = data.response;

  return { mine, lover };
}
