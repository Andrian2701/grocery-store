import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { useFormatQuantity } from "../../hooks/useFormatQuantity";
import { AddToCartButton } from "../AddToCartButton";
import { LoadingCard } from "./LoadingCard";
import { Product } from "../../types";

type ProductCardProps = {
  product?: Product;
  isLoading: boolean;
};

export const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  const theme = useTheme();
  const formattedQuantity = useFormatQuantity(
    product?.quantity ?? 0,
    product?.units ?? ""
  );

  return (
    <>
      <Box
        component={Link}
        to={!isLoading ? `/${product?.category}/${product?.name}` : "#"}
        sx={{
          textDecoration: "none",
          height: "18rem",
          width: {
            xs: "13.5rem !important",
            md: "14rem !important",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            padding: "1rem 1rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "1rem",
            bgcolor: "#ffffff",
            cursor: "pointer",
          }}
        >
          {!isLoading ? (
            <>
              <Box
                component="img"
                src={product?.imgURL}
                alt={product?.name}
                width={{ xs: 130, sm: 150 }}
                height={{ xs: 130, sm: 150 }}
              />
              <Box>
                <Typography
                  variant="h2"
                  fontSize="1.2rem !important"
                  textAlign="center"
                  sx={{
                    transitionDuration: "0.2s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {product?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="13.5px !important"
                  textAlign="center"
                >
                  {formattedQuantity}, Pricetag
                </Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h2" fontSize="1.2rem !important">
                  ${product?.price}
                </Typography>
                <AddToCartButton
                  selectedProduct={product}
                  selectedQ={product?.quantity}
                  totalPrice={product?.price}
                />
              </Box>
            </>
          ) : (
            <LoadingCard />
          )}
        </Box>
      </Box>
    </>
  );
};
