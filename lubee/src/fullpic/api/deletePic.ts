import api from "@common/api/api";

interface DeletePicDataTypes {
  memory_id: number;
}

export async function deletePic(memory_id: DeletePicDataTypes) {
  const { data } = await api.delete(`/api/memories/${memory_id}`);

  return data;
}
