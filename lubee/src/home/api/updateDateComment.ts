import api from "@common/api/api";

interface UpdateDateCommentRequestTypes {
  date: string;
  content: string;
}

export async function updateDateComment(props: UpdateDateCommentRequestTypes) {
  const { date, content } = props;
  const { data } = await api.put("/api/datecomments", {
    date: date,
    content: content,
  });

  return data;
}
