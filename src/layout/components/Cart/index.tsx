import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { ProductListItem } from "../../../components";
import { useGetCartItemsQuery } from "../../../features/CartItems/CartItemsSlice";
import { CartItems } from "../../../features/CartItems/types";
import { useToggleDrawer } from "../../../hooks/useToggleDrawer";
import { auth } from "../../../utils/firebase";
import emptyCart from "../../../assets/empty-cart.png";

export const Cart = () => {
  const theme = useTheme();
  const [hamburger, setHamburger] = useState({
    right: false,
  });
  const toggleDrawer = useToggleDrawer(setHamburger, "right");
  const showIcon = useMediaQuery("only screen and (max-width: 768px)");
  const user = auth.currentUser;
  const { data: cartItems } = useGetCartItemsQuery(user?.uid);
  const isCartEmpty = cartItems?.length === 0;

  return (
    <>
      <MenuItem onClick={toggleDrawer(true)} sx={{ fontSize: 13.5 }}>
        {showIcon ? (
          <IconButton>
            <ShoppingCartIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        ) : (
          "Cart"
        )}
      </MenuItem>

      <Drawer
        anchor="right"
        open={hamburger.right}
        onClose={toggleDrawer(false)}
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
            <Typography variant="h4">All</Typography>
            <IconButton onClick={toggleDrawer(false)}>
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
            {!isCartEmpty ? (
              <>
                {cartItems?.map((product: CartItems) => (
                  <ProductListItem
                    key={product.name}
                    data={product}
                    uid={user?.uid}
                    isCartItem={true}
                    setCart={toggleDrawer(false)}
                  />
                ))}
              </>
            ) : (
              <>
                <Box width="100%" display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src={emptyCart}
                    alt="empty-cart"
                    width="15rem"
                    height="15rem"
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
          {!isCartEmpty && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              height={{ xs: 56, sm: 64 }}
              padding={{ xs: "0 16px", sm: "0 24px" }}
            >
              <Typography variant="h4" fontWeight="400 !important">
                Total: 124$
              </Typography>
              <Button>To Checkout</Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};
