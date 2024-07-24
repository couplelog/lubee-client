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

export async function getTodayDateComment({ coupleId, date }: GetTodayDateCommentRequest) {
  const { data } = await api.get<Response<GetTodayDateCommentResponse>>(
    `/api/datecomments/today?coupleId=${coupleId}&date=${date}`,
  );

  // data.response에 접근하여 mine과 lover 데이터를 추출
  const { mine, lover } = data.response;

  return { mine, lover };
}
