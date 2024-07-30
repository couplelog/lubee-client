import api from "@common/api/api";

interface PostLubeeCodeDataTypes {
  inputCode: string;
}

export async function postLubeeCode(props: PostLubeeCodeDataTypes) {
  const { inputCode } = props;
  const { data } = await api.post("/api/couples/link", {
    inputCode: inputCode,
  });

  return data;
}
