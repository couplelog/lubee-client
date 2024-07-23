import api from "@common/api/api";

interface postUploadPicDataTypes {
  picture: File;
  location_id: number;
  time: Date;
}

export async function postUploadPic(props: postUploadPicDataTypes) {
  const { picture, location_id, time } = props;
  const { data } = await api.post(`/api/memories/create`, {
    picture: picture,
    location_id: location_id,
    time: time,
  });

  return data;
}
