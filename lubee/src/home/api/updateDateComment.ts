import api from "@common/api/api";

interface UpdateDateCommentDataTypes {
  datecommentId: number;
  content: string;
}

export async function updateDateComment(props: UpdateDateCommentDataTypes) {
  const { datecommentId, content } = props;

  const response = await api.put("/api/datecomments", {
    datecommentId: datecommentId,
    content: content,
  });

  return response;
}
