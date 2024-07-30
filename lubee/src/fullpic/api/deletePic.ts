import api from "@common/api/api";

export async function deletePic(memory_id: number) {
  const { data } = await api.delete(`/api/memories/?memory_id=${memory_id}`);

  return data;
}
