import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface LoveDayDataTypes {
  love_day: number;
}

export async function getLoveDay() {
  const { data } = await api.get<Response<LoveDayDataTypes>>(`/api/memories/home`);
  return data;
}
