// ID와 날짜를 로컬 스토리지에 저장하는 함수
export function saveCommentIdToLocalStorage(date: Date, id: number) {
  const comments = JSON.parse(localStorage.getItem("comments") || "{}");
  const dateString = date.toISOString();
  comments[dateString] = id;
  localStorage.setItem("comments", JSON.stringify(comments));
}

// ID와 날짜를 로컬 스토리지에서 가져오는 함수
export function getCommentIdFromLocalStorage(date: Date): number | null {
  const comments = JSON.parse(localStorage.getItem("comments") || "{}");
  const dateString = date.toISOString();
  return comments[dateString] || null;
}
