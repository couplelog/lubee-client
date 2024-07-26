import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface CouplesInfoDataTypes {
  nickname_first: string;
  profile_first: string;
  nickname_second: string;
  profile_second: string;
  birthday_first: string;
  birthday_second: string;
  anniversaryListDto: AnniversaryListDtoTypes;
}

interface AnniversaryListDtoTypes {
  anniversaryDtoList: AnniversaryDtoListTypes[];
}

interface AnniversaryDtoListTypes {
  anniversary_title: string;
  anniversary_date: string;
}

export async function getCouplesInfo() {
  const { data } = await api.get<Response<CouplesInfoDataTypes>>(`/api/couples/couple_info`);
  return data;
}
