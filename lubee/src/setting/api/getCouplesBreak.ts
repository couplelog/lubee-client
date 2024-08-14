import api from "@common/api/api";
import { Response } from "@common/types/Response";

export async function getCouplesBreak() {
  const { data } = await api.get<Response<{}>>(`/api/couples/break`);
  return data;
}
