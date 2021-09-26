export function configurePaginate(list: any[], page: number, range: number) {
  if (page && list && list.length) {
    const newPage: number = page;
    const firstIndex: number = page === 1 ? page : (page - 1) * range;
    const lastIndex: number = firstIndex + range;
    const newPaginatedList = list.slice(firstIndex, lastIndex);

    return {
      newProducts: newPaginatedList,
      newPage,
    };
  }
}
