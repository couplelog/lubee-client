import api from "@common/api/api";

interface DateCommentDataTypes {
  content: string;
  coupleId: number;
  date: string;
}

export async function postDateComment(props: DateCommentDataTypes) {
  const { content, coupleId, date } = props;
  const response = await api.post("/api/datecomments", {
    content: content,
    coupleId: coupleId,
    date: date,
  });

  return response.data;
}
