import { FilterInterface } from "../filters";

export type FilterAction = { type: string; payload: FilterInterface };

export const setFilters = (filters: FilterInterface): FilterAction => ({
  type: "SET_FILTERS",
  payload: filters,
});
