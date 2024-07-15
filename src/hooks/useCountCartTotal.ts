import { CartItems } from "../types";

export const useCountCartTotal = (cartItems: CartItems[]) => {
  console.log("useCountCartTotal", "render");

  const total = cartItems?.reduce(
    (total: number, item: CartItems) => total + item.totalPrice,
    0
  );

  return `${total}$`;
};
