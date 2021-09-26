import { ProductAction } from "./actions/ProductsActions";

export interface ProductsState {
  products: ProductInterface[];
  filteredProducts: ProductInterface[];
}

export interface ProductInterface {
  id: string;
  image: { url: string };
  description: string;
  rating: number;
  price: string;
  priceCents: number;
  available: number;
}

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
