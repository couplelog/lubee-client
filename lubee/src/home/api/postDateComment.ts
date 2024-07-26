import api from "@common/api/api";

interface PostDateCommentDataTypes {
  content: string;
  coupleId: number;
  date: string;
}

export async function postDateComment(props: PostDateCommentDataTypes) {
  const { content, coupleId, date } = props;
  const { data } = await api.post("/api/datecomments", {
    content: content,
    coupleId: coupleId,
    date: date,
  });

  return data;
}
