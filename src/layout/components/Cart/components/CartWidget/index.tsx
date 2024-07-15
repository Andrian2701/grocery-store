import { ReactElement } from "react";
import { Box, IconButton, MenuItem, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type CartWidgetProps = {
  cartItemsCount: number;
  toggleDrawer: any;
  icon?: ReactElement;
};

export const CartWidget = ({
  cartItemsCount,
  toggleDrawer,
  icon,
}: CartWidgetProps) => {
  const theme = useTheme();

  return (
    <>
      {!icon ? (
        <MenuItem
          onClick={toggleDrawer}
          sx={{ color: theme.palette.primary.main }}
        >
          Edit
        </MenuItem>
      ) : (
        <MenuItem onClick={toggleDrawer} sx={{ fontSize: 13.5 }}>
          <IconButton sx={{ position: "relative" }}>
            <ShoppingCartIcon sx={{ color: theme.palette.primary.main }} />
            {cartItemsCount !== 0 && (
              <Box
                width="18px"
                height="18px"
                borderRadius={999}
                bgcolor="#fcd64c"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                fontSize={12.5}
                right="2px"
                top="2px"
              >
                {cartItemsCount}
              </Box>
            )}
          </IconButton>
        </MenuItem>
      )}
    </>
  );
};
