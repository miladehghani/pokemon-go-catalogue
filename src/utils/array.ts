export const union = (source: any[], searchFor: any[], key: string) => {
  return source.filter(
    (item) => searchFor.filter((sf) => sf[key] === item[key]).length > 0
  );
};
