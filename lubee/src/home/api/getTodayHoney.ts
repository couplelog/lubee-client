import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface HoneyDataTypes {
  response: number;
}

// date 넘겨주기
interface GetTodayHoneyRequest {
  date: string;
}

export async function getTodayHoney({ date }: GetTodayHoneyRequest) {
  const { data } = await api.get<Response<HoneyDataTypes>>(`/api/calendars/honey/today?date=${date}`);
  return data.response;
}
