export const useInfiniteScroll = (fetchMore: () => void) => {
  return (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const dataTable = e.currentTarget;
    const endOfScroll =
      dataTable.scrollHeight - dataTable.clientHeight - dataTable.scrollTop <
      30;
    if (endOfScroll) fetchMore();
  };
};
