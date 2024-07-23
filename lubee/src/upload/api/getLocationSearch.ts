import api from "@common/api/api";
import { Response } from "@common/types/Response";

interface LocationSearchDataTypes {
  totalNum: number;
  locations: LocationsDataTypes[];
}

interface LocationsDataTypes {
  name: string;
  locationId: number;
  parcelBaseAddress: string;
}

export interface LocationSearchParams {
  keyword: string;
}

export async function getLocationSearch({ keyword }: LocationSearchParams) {
  const { data } = await api.get<Response<LocationSearchDataTypes>>(`/api/locations/search?keyword=${keyword}`);
  return data;
}
