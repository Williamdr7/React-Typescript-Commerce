import { createStore } from "redux";
import { filtersReducer } from "./filters";
import { productsReducer } from "./productsReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { mobileFiltersReducer } from "./mobileFilters";

const reducers = combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  cart: cartReducer,
  mobileFilters: mobileFiltersReducer,
});

export const store = createStore(reducers);
