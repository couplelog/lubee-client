import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface LocationSearchDataTypes {
  totalNum: number;
  locations: LocationsDataTypes[];
}

interface LocationsDataTypes {
  name: string;
  location_id: number;
  parcelBaseAddress: string;
}

export interface LocationSearchParams {
  keyword: string;
}

export async function getLocationSearch({ keyword }: LocationSearchParams) {
  const { data } = await api.get<Response<LocationSearchDataTypes>>(`/api/locations/search`, {
    params: { keyword },
  });
  return data;
}
