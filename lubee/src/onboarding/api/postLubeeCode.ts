import api from "@common/api/api";

interface LubeeCodeDataTypes {
  inputCode: string;
}

export async function postLubeeCode(props: LubeeCodeDataTypes) {
  const { inputCode } = props;
  const response = await api.post("/api/couples/link", {
    inputCode: inputCode,
  });

  return response;
}
