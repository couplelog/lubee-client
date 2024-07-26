import api from "@common/api/api";

interface PostLoginUserDataTypes {
  nickname: string;
  profile: string;
  birthday: string;
  startDate: string;
}

export async function postLoginUser(props: PostLoginUserDataTypes) {
  const { nickname, profile, birthday, startDate } = props;
  const { data } = await api.post("/api/users/onBoarding", {
    nickname: nickname,
    profile: profile,
    birthday: birthday,
    startDate: startDate,
  });

  return data;
}
