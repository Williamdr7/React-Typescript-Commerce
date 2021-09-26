import validateFilters from "../../helpers/validateFilter";
import { ProductInterface } from "../productsReducer";

export type ProductAction = {
  type: string;
  payload: ProductInterface[];
};

export const setProducts = (products: ProductInterface[]): ProductAction => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const setFilteredProducts = (
  filteredProducts: ProductInterface[]
): ProductAction => ({
  type: "SET_FILTERED_PRODUCTS",
  payload: filteredProducts,
});

export const filterProducts = (
  products: ProductInterface[],
  filters: any
): ProductAction => {
  return {
    type: "SET_FILTERED_PRODUCTS",
    payload: validateFilters(products, filters),
  };
};
