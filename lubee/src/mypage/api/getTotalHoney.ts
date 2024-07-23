import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface HoneyDataTypes {
  response: number;
}

export async function getTotalHoney() {
  const { data } = await api.get<Response<HoneyDataTypes>>(`/api/calendars/honey/total`);
  return data;
}
