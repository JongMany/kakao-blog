const joinSuccessExpiration = 1000 * 60 * 30; // 30 minutes

export type JoinSuccessItem<T> = {
  value: T;
  expiry: number;
};

// 일정 시간 이상 지나면 삭제될 수 있는 정보를 담은 객체를 sessionStorage에 저장
export function setJoinSuccessExpirationInSessionStorage<T>(value: T) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + joinSuccessExpiration,
  };
  sessionStorage.setItem("joinSuccess", JSON.stringify(item));
}

// 일정 시간 이상 지나면 삭제될 수 있는 정보를 담은 객체를 sessionStorage에 저장
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export function validateJoinSuccessFromSessionStorage<T extends unknown>() {
  const itemStr = sessionStorage.getItem("joinSuccess");
  if (!itemStr) {
    return false;
  }
  const item = JSON.parse(itemStr) as JoinSuccessItem<T>;
  const now = new Date();
  if (now.getTime() > item.expiry) {
    sessionStorage.removeItem("joinSuccess");
    return false;
  }
  return item.value;
}
