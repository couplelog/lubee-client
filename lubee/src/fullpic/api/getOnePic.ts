import api from "@common/api/api";
import { Response } from "@common/types/Response";

export interface MemoryBaseDtoDataTypes {
  memory_id: number;
  user_id: number;
  location_name: string;
  picture: string;
  writer_profile_first: string;
  writer_profile_second: string;
  reaction_first: string;
  reaction_second: string;
  upload_time: string;
}

interface OnePicDataTypes {
  memoryBaseDto: MemoryBaseDtoDataTypes;
}

export async function getOnePic(memory_id: number) {
  const { data } = await api.get<Response<OnePicDataTypes>>(`/api/memories/?memory_id=${memory_id}`);
  return data;
}
