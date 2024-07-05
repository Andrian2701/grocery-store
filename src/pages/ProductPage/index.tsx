import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { QuantitySelector } from "../../containers";
import { AddToCartButton, Categories, PageLoader } from "../../components";
import { Product } from "../../components/ProductCard/types";
import { useGetProductsQuery } from "../../store/features/Products/ProductsSlice";

export const ProductPage = () => {
  const [selectedQ, setSelectedQ] = useState<number>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const { category, name } = useParams();
  const { data: products, isLoading } = useGetProductsQuery(category);

  const selectedProduct = useMemo(
    () =>
      Array.isArray(products?.data) &&
      products.data.find((product: Product) => product.name === name),
    [products, name]
  );

  return (
    <>
      {!isLoading ? (
        <>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="space-between"
            marginTop={10}
            padding={{
              xs: "0 16px 48px 16px",
              sm: "0 24px 48px 24px",
              md: "0 48px 48px 48px",
            }}
          >
            <Box
              width={{ xs: "100%", sm: "100%", md: "50%" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                src={selectedProduct.imgURL}
                alt={selectedProduct.name}
                width={{ xs: "15rem", sm: "18rem", md: "20rem" }}
                height={{ xs: "15rem", sm: "18rem", md: "20rem" }}
              />
            </Box>
            <Box
              height="100%"
              width={{ xs: "100%", sm: "100%", md: "50%" }}
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
              justifyContent="center"
              gap="2rem"
            >
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h1">{selectedProduct.name}</Typography>
                <QuantitySelector
                  quantity={selectedProduct.quantity}
                  units={selectedProduct.units}
                  price={selectedProduct.price}
                  onQuantityChange={(q, totalPrice) => {
                    setSelectedQ(q);
                    setTotalPrice(totalPrice);
                  }}
                />
              </Box>
              <Typography variant="subtitle1">
                {selectedProduct.about}
              </Typography>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                fontWeight={600}
              >
                <Box display="flex" alignItems="center" gap="1rem">
                  <span>⭐️</span>
                  <span>4.5</span>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem">
                  <span>🔥</span>
                  <span>{selectedProduct.calories} Kcal</span>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem">
                  <span>⏰</span>
                  <span>10-15 Min</span>
                </Box>
              </Box>
              <Categories title="Related Items" />
              <AddToCartButton
                title="Add To Cart"
                selectedProduct={selectedProduct}
                selectedQ={selectedQ}
                totalPrice={totalPrice}
              />
            </Box>
          </Box>
        </>
      ) : (
        <PageLoader />
      )}
    </>
  );
};
