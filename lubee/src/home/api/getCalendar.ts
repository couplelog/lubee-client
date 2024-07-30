import api from "@common/api/api";
import { Response } from "@common/types/Response";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface CalendarDataTypes {
  calendarMemoryYearMonthDtoList: OuterListTypes[];
}

interface OuterListTypes {
  year: number;
  month: number;
  calendarMemoryDayDtoList: InnerListTypes[];
}

interface InnerListTypes {
  day: number;
  memoryBaseListDto: MemoryBaseDtoDataTypes[];
}

export async function getCalendar() {
  const { data } = await api.get<Response<CalendarDataTypes>>(`/api/calendars/total_calendar`);
  return data;
}
