import api from "@common/api/api";
import { Response } from "@common/types/Response";

export async function getTotalHoney() {
  const { data } = await api.get<Response<number>>(`/api/calendars/honey/total`);
  return data;
}
