export type CartAction = { type: string; payload: number };

export const setCartAmount = (amount: number): CartAction => ({
  type: "SET_AMOUNT",
  payload: amount,
});

export const setCartPrice = (amount: number): CartAction => ({
  type: "SET_PRICE",
  payload: amount,
});
