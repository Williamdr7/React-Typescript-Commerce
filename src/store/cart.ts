import { CartAction } from "./actions/CartAction";

export interface CartInterface {
  cart: {
    amount: number;
    price: number;
  };
}

const initialState = {
  cart: {
    amount: 0,
    price: 0,
  },
};
export const cartReducer = (
  state: CartInterface = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case "SET_AMOUNT":
      return { ...state, cart: { amount: action.payload } };
    case "SET_PRICE":
      return { ...state, cart: { ...state.cart, price: action.payload } };
    default:
      return state;
  }
};
