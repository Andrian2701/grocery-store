import { useMemo } from "react";
import { Typography } from "@mui/material";
import { CartItems } from "../../../../../types";

type CartTotalProps = {
  cartItems: CartItems[];
};

export const CartTotal = ({ cartItems }: CartTotalProps) => {
  const total = useMemo(
    () =>
      cartItems?.reduce(
        (total: number, item: CartItems) => total + item.totalPrice,
        0
      ),
    [cartItems]
  );

  return (
    <Typography variant="h4" fontWeight="400 !important">
      Total: {total}$
    </Typography>
  );
};
