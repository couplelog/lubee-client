import api from "@common/api/api";
import { Response } from "@common/types/Response";

export async function getSignOut() {
  const { data } = await api.get<Response<{}>>(`/api/users/signout`);
  return data;
}
