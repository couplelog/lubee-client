import api from "@common/api/api";

interface postUploadPicDataTypes {
  picture: File;
  location_id: number;
}

export async function postUploadPic({ picture, location_id }: postUploadPicDataTypes) {
  // Create a FormData object
  const formData = new FormData();
  formData.append("picture", picture);
  formData.append("location_id", location_id.toString());

  // Make the API request with the FormData object
  const { data } = await api.post(`/api/memories/create`, formData);

  return data;
}
