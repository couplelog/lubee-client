import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface TodayDateCommentDataTypes {
  comment_first: string;
  comment_second: string;
}

interface GetTodayDateCommentRequest {
  date: string;
}

export async function getTodayDateComment({ date }: GetTodayDateCommentRequest) {
  const { data } = await api.get<Response<TodayDateCommentDataTypes>>(`/api/datecomments/today?date=${date}`);

  return data;
}
