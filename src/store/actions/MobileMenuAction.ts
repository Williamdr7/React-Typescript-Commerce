export type MobileFiltersAction = {
  type: string;
  payload: boolean;
};

export const setMobileFilters = (
  mobileFilters: boolean
): MobileFiltersAction => ({
  type: "SET_MOBILE_FILTERS",
  payload: mobileFilters,
});
