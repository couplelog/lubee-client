import api from "@common/api/api";

interface postUploadPicDataTypes {
  picture: File;
  location_id: number;
}

export async function postUploadPic(props: postUploadPicDataTypes) {
  const { picture, location_id } = props;
  const { data } = await api.post(`/api/memories/create`, {
    picture: picture,
    location_id: location_id,
  });

  return data;
}
