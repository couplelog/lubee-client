import api from "@common/api/api";
import { Response } from "@common/types/Response";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface SpecificCalendarDataTypes {
  calendarMemoryDayDtoList: InnerListTypes[];
}
interface InnerListTypes {
  day: number;
  memoryBaseListDto: MemoryBaseDtoDataTypes[];
}

export interface RequestParams {
  year: number;
  month: number;
  day: number;
}

export async function getSpecificCalendar({ year, month, day }: RequestParams) {
  const { data } = await api.get<Response<SpecificCalendarDataTypes[]>>(
    `/api/calendars/specific_calendar?year=${year}&&month=${month}&&day=${day}`,
  );
  return data;
}
