export const getItemLocalStorage = (item: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(item);
  }
  return undefined;
};
