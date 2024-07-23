import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface HoneyDataTypes {
  response: number;
}

// date 넘겨주기
interface GetTodayHoneyRequest {
  date: string;
}

// GET 요청에서는 보통 요청 바디를 사용하지 않음
// 그래서 쿼리 파라미터로 전달
export async function getTodayHoney(request: GetTodayHoneyRequest) {
  const { data } = await api.get<Response<HoneyDataTypes>>(`/api/calendars/honey/today`, {
    params: { Date: request.date },
  });
  return data.response;
}
