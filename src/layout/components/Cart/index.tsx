import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMediaQuery } from "@react-hook/media-query";
import emptyCart from "../../../assets/empty-cart.png";

export const Cart = () => {
  const theme = useTheme();
  const [cart, setCart] = useState({
    right: false,
  });
  const showIcon = useMediaQuery("only screen and (max-width: 768px)");

  const handleToggle =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setCart({ ...cart, [anchor]: open });
    };

  return (
    <>
      <MenuItem onClick={handleToggle("right", true)} sx={{ fontSize: 13.5 }}>
        {showIcon ? (
          <IconButton>
            <ShoppingCartIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>
        ) : (
          "Cart"
        )}
      </MenuItem>
      <Drawer
        anchor={"right"}
        open={cart["right"]}
        onClose={handleToggle("right", false)}
        sx={{ position: "relative" }}
      >
        <Box
          width={{ xs: "100vw", sm: "25rem" }}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height={{ xs: 56, sm: 64 }}
            width={{ xs: "100%", sm: 400 }}
            padding={{ xs: "0 16px", sm: "0 24px" }}
          >
            <Typography variant="h4">Cart</Typography>
            <IconButton onClick={handleToggle("right", false)}>
              <CloseIcon onClick={handleToggle("right", false)} />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={{
              xs: "0 16px 16px 16px",
              sm: "0 24px 16px 24px",
            }}
          >
            <Box
              component="img"
              alt="empty-cart"
              src={emptyCart}
              width="15rem"
              height="20rem"
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <Typography
                variant="h2"
                fontSize="1.2rem !important"
                fontWeight={500}
              >
                You Cart Is Empty
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="center"
                fontSize={13.5}
              >
                If you click "Add To Cart" on any product, it will be displayed
                here
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
