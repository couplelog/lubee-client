import api from "@common/api/api";
export interface PostUploadPicDataTypes {
  location_id: number;
  picture: File;
}

export async function postUploadPic({ location_id, picture }: PostUploadPicDataTypes) {
  const requestBody = new FormData();
  requestBody.append("picture", picture);

  const { data } = await api.post(`/api/memories/create?location_id=${location_id}`, requestBody, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}
