import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface GetTodayHoneyRequest {
  date: string;
}

export async function getTodayHoney({ date }: GetTodayHoneyRequest) {
  const { data } = await api.get<Response<number>>(`/api/calendars/honey/today?date=${date}`);
  return data;
}
