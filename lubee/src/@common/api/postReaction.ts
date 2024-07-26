import api from "@common/api/api";

export interface PostReactionDataTypes {
  memory_id: number;
  reaction: string;
}

export async function postReaction({ memory_id, reaction }: PostReactionDataTypes) {
  const { data } = await api.post(`/api/memories/reaction/?memory_id=${memory_id}&&reaction=${reaction}`);

  return data;
}
