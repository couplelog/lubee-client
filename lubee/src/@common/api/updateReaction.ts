import api from "@common/api/api";

interface UpdateReactionRequestTypes {
  memory_id: number;
  reaction: string | null;
}

export async function updateReaction(props: UpdateReactionRequestTypes) {
  const { memory_id, reaction } = props;

  const { data } = await api.put(`/api/memories/reaction/?memory_id=${memory_id}&reaction=${reaction}`);

  return data;
}
