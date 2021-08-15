export const timeoutPromise = (lag: number): Promise<[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([]), lag);
  });
};

export const judgeUserExist = <T extends { username: string }>(
  arr: T[],
  key: string | undefined | string[]
) => {
  return (
    typeof key === "string" &&
    arr.find((item: T) => item.username.toLowerCase() === key.toLowerCase())
  );
};
