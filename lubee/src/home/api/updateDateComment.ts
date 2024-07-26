import api from "@common/api/api";

interface UpdateDateCommentRequestTypes {
  datecommentId: number;
  content: string;
}

export async function updateDateComment(props: UpdateDateCommentRequestTypes) {
  const { datecommentId, content } = props;

  const { data } = await api.put("/api/datecomments", {
    datecommentId: datecommentId,
    content: content,
  });

  return data;
}
