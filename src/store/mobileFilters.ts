import { MobileFiltersAction } from "./actions/MobileMenuAction";

export interface MobileFiltersInterface {
  mobileFilters: boolean;
}

const initialState = {
  mobileFilters: false,
};
export const mobileFiltersReducer = (
  state: MobileFiltersInterface = initialState,
  action: MobileFiltersAction
) => {
  switch (action.type) {
    case "SET_MOBILE_FILTERS":
      return { ...state, mobileFilters: action.payload };
    default:
      return state;
  }
};
