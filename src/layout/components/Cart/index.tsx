import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProductListItem } from "../../../common";
import { CartWidget, CartTotal } from "./components";
import { useToggleDrawer } from "../../../hooks/useToggleDrawer";
import { useGetCartItems } from "../../../hooks/useGetCartItems";
import { useGetCurrentUser } from "../../../hooks/useGetCurrentUser";
import emptyCartImg from "../../../assets/empty-cart.png";
import { CartItems } from "../../../types";

type CartProps = {
  icon?: ReactElement;
};

export const Cart = ({ icon }: CartProps) => {
  const [cart, setCart] = useState({
    right: false,
  });
  const toggleDrawer = useToggleDrawer(setCart, "right");
  const currentUser = useGetCurrentUser();
  const cartItems = useGetCartItems(currentUser?.uid);
  const emptyCart = cartItems?.length === 0;

  return (
    <>
      <CartWidget
        icon={icon}
        cartItemsCount={cartItems?.length}
        toggleDrawer={toggleDrawer(!cart.right)}
      />
      <Drawer
        anchor="right"
        open={cart.right}
        onClose={toggleDrawer(!cart.right)}
        sx={{ position: "relative" }}
      >
        <Box
          width={{ xs: "100vw", sm: "35rem" }}
          height="100vh"
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height={{ xs: 56, sm: 64 }}
            width="100%"
            padding={{ xs: "0 16px", sm: "0 24px" }}
          >
            <Typography variant="h4">Cart</Typography>
            <IconButton onClick={toggleDrawer(!cart.right)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex={1}
            height="100%"
            overflow="auto"
          >
            {!emptyCart ? (
              cartItems?.map((product: CartItems) => (
                <ProductListItem
                  key={product.name}
                  data={product}
                  uid={currentUser?.uid}
                  isCartItem={true}
                  setCart={toggleDrawer(!cart.right)}
                />
              ))
            ) : (
              <>
                <Box width="100%" display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src={emptyCartImg}
                    alt="empty-cart"
                    width="15rem"
                    height="20rem"
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={1}
                >
                  <Typography fontSize="1.2rem" fontWeight={500}>
                    Your Cart Is Empty
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    fontSize={13.5}
                  >
                    If you click "Add To Cart" on any product, it will be
                    displayed here
                  </Typography>
                </Box>
              </>
            )}
          </Box>
          {!emptyCart && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              height={{ xs: 56, sm: 64 }}
              padding={{ xs: "0 16px", sm: "0 24px" }}
            >
              <CartTotal cartItems={cartItems} />
              <Button
                component={Link}
                to="/checkout"
                onClick={toggleDrawer(!cart.right)}
              >
                To Checkout
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};
