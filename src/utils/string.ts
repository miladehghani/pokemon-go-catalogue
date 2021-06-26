export const extractIdFromUrl = (url: string): number => {
  const parts = url.split("/");
  return parseInt(parts[parts.length - 2]);
};
