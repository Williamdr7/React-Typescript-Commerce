import { FilterAction } from "./actions/FilterActions";

export interface FiltersInterface {
  filters: FilterInterface;
}

export interface FilterInterface {
  max: number;
  min: number;
  rating: number;
  search: string;
}

const initialState = {
  filters: {
    max: 0,
    min: 0,
    rating: 0,
    search: " ",
  },
};

export const filtersReducer = (
  state: FiltersInterface = initialState,
  action: FilterAction
) => {
  switch (action.type) {
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};
