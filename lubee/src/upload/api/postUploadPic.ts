import api from "@common/api/api";
export interface PostUploadPicDataTypes {
  location_id: number;
  picture: File;
  year: number;
  month: number;
  day: number;
}

export async function postUploadPic({ location_id, picture, year, month, day }: PostUploadPicDataTypes) {
  const requestBody = new FormData();
  requestBody.append("picture", picture);

  const { data } = await api.post(
    `/api/memories/create?location_id=${location_id}&&year=${year}&&month=${month}&&day=${day}`,
    requestBody,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data;
}
