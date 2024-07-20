import { AxiosResponse } from "axios";
import { customAxios } from "api/customAxios";

export interface ResponseTypes {
  code: string;
}

interface GetLubeeCodeTypes {
  success: boolean;
  response: ResponseTypes;
}

export async function getLubeeCode(): Promise<ResponseTypes> {
  const { data }: AxiosResponse<GetLubeeCodeTypes> = await customAxios.get(`/api/couples/lubee-code`);

  const { response } = data;
  return response;
}
