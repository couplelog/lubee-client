import api from "@common/api/api";

interface UpdateDateCommentDataTypes {
  date: string;
  content: string;
}

export async function updateDateComment(props: UpdateDateCommentDataTypes) {
  const { date, content } = props;
  const dateCommentId = getCommentIdFromLocalStorage(date);

  if (!dateCommentId) {
    throw new Error("코멘트 ID를 찾을 수 없습니다.");
  }

  const response = await api.put("/api/datecomments", {
    dateCommentId: dateCommentId,
    content: content,
  });

  return response;
}
