import api from "@common/api/api";
import { Response } from "@common/types/Response";

export interface MemoryBaseDtoDataTypes {
  memory_id: number;
  user_id: number;
  location_name: string;
  picture: string;
  writer_profile: string;
  reaction1: string;
  reaction2: string;
  upload_time: string;
}

interface OnePicDataTypes {
  memoryBaseDto: MemoryBaseDtoDataTypes;
}

export async function getOnePic(memory_id: number) {
  const { data } = await api.get<Response<OnePicDataTypes>>(`/api/memories/${memory_id}`);
  return data;
}

// {
//   "memoryBaseDto": [ # 매일 매일 기록을 올리는 것
//      {
//        "memory_id" : 1,
//        "user_id" : 2, # 기록 올린사람의 user_id
//        "location_name": "Central Park", # 위치
//        "picture": "http://example.com/memories/centralpark.jpg",
//        "writer_profile":  # 글 쓴 사람의 프로필
//          "첫째"
//        "reaction1": "기쁨",
//        "reaction2": "나쁨"
//      },
// },
