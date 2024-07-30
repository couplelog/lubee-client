import api from "@common/api/api";

interface PostDateCommentDataTypes {
  content: string;
  date: string;
}

export async function postDateComment(props: PostDateCommentDataTypes) {
  const { content, date } = props;
  const { data } = await api.post("/api/datecomments", {
    content: content,
    date: date,
  });

  return data;
}
