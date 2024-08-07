import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useFormatQuantity } from "../../hooks/useFormatQuantity";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { AddToCartButton } from "../AddToCartButton";
import { db } from "../../utils/firebase";
import { CartItems, Product } from "../../types";

type ProductListItemProps = {
  data: Product | CartItems;
  isCartItem?: boolean;
  setCart?: any;
  uid?: string;
};

function isProduct(data: Product | CartItems): data is Product {
  return (data as Product).price !== undefined;
}

export const ProductListItem = ({
  data,
  isCartItem = false,
  setCart,
  uid,
}: ProductListItemProps) => {
  const theme = useTheme();
  const formattedQuantity = useFormatQuantity(
    isCartItem
      ? (data as CartItems).selectedQuantity
      : (data as Product).quantity,
    data.units
  );

  const handleRemoveCartItem = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (uid) {
      await updateDoc(doc(db, "carts", uid), {
        items: arrayRemove({
          category: data.category,
          imgURL: data.imgURL,
          name: data.name,
          productId: data.productId,
          quantity: data.quantity,
          packagingType: data.packagingType,
          selectedQuantity: (data as CartItems).selectedQuantity,
          totalPrice: (data as CartItems).totalPrice,
          units: data.units,
        }),
      });
    }
  };

  return (
    <Box
      key={data.name}
      component={Link}
      to={`/${data.category}/${data.name}`}
      onClick={() => setCart(false)}
      sx={{
        cursor: "pointer",
        textDecoration: "none",
        bgcolor: "#ffffff",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid #e8e8e8`,
        padding: "1.2rem",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Box
          component="img"
          src={data.imgURL}
          alt={data.name}
          width="4rem"
          height="4rem"
        />
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h4"
            sx={{
              transitionDuration: "0.2s",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            {data.name}
          </Typography>
          <Typography variant="subtitle1" fontSize="12px">
            {!isCartItem ? `${formattedQuantity}, Pricetag` : formattedQuantity}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Typography variant="h4">
          {isProduct(data)
            ? `$${data.price}`
            : `$${(data as CartItems).totalPrice}`}
        </Typography>
        {isCartItem ? (
          <IconButton onClick={handleRemoveCartItem}>
            <DeleteForeverIcon sx={{ color: "#808588" }} />
          </IconButton>
        ) : (
          <AddToCartButton
            selectedProduct={data}
            selectedQ={data.quantity}
            totalPrice={isProduct(data) ? data.price : undefined}
          />
        )}
      </Box>
    </Box>
  );
};
