import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface TodayDateCommentDataTypes {
  content: string;
  profile: string | null;
}

interface GetTodayDateCommentRequest {
  date: string;
}

interface GetTodayDateCommentResponse {
  mine: TodayDateCommentDataTypes;
  lover: TodayDateCommentDataTypes | null;
}

export async function getTodayDateComment({ date }: GetTodayDateCommentRequest) {
  const { data } = await api.get<Response<GetTodayDateCommentResponse>>(`/api/datecomments/today?date=${date}`);

  return data;
}
