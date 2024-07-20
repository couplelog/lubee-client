import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface LubeeCodeDataTypes {
  code: string;
}

export async function getLubeeCode() {
  const { data } = await api.get<Response<LubeeCodeDataTypes>>(`/api/couples/lubee-code`);
  return data;
}
