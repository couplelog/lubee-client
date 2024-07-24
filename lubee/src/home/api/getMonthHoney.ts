import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface HoneyDataTypes {
  response: number;
}

// date 넘겨주기
interface GetMonthHoneyRequest {
  year: number;
  month: number;
}

export async function getMonthHoney({ year, month }: GetMonthHoneyRequest) {
  const { data } = await api.get<Response<HoneyDataTypes>>(`/api/calendars/honey/month?year=${year}&month=${month}`);
  return data.response;
}
