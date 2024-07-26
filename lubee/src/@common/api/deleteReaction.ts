import api from "@common/api/api";

export async function deleteReaction(memory_id: number) {
  const { data } = await api.delete(`/api/memories/reaction/?memory_id=${memory_id}`);

  return data;
}
