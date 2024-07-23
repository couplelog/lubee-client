import api from "@common/api/api";

interface UpdateDateCommentDataTypes {
  dateCommentId: number;
  content: string;
}

export async function updateDateComment(props: UpdateDateCommentDataTypes) {
  const { dateCommentId, content } = props;

  const response = await api.put("/api/datecomments", {
    dateCommentId: dateCommentId,
    content: content,
  });

  return response;
}
