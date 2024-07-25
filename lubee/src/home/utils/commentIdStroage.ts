// ID와 날짜를 로컬 스토리지에 저장하는 함수
function saveCommentIdToLocalStorage(date: Date, id: number) {
  const comments = JSON.parse(localStorage.getItem("comments") || "{}");
  comments[date] = id;
  localStorage.setItem("comments", JSON.stringify(comments));
}

// ID와 날짜를 로컬 스토리지에서 가져오는 함수
function getCommentIdFromLocalStorage(date: Date): number | null {
  const comments = JSON.parse(localStorage.getItem("comments") || "{}");
  return comments[date] || null;
}
