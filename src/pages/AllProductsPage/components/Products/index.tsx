import { Box, Typography } from "@mui/material";
import { ProductCard } from "../../../../common";
import { Product } from "../../../../types";

type ProductsProps = {
  isLoading: boolean;
  products: Product[];
};

export const Products = ({ isLoading, products }: ProductsProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap="10px"
      flexGrow={1}
      minWidth={0}
      justifyContent={{ xs: "center", sm: "flex-start" }}
    >
      {products?.length === 0 ? (
        <Typography variant="subtitle1" width="100%" textAlign="center">
          No Products found
        </Typography>
      ) : (
        <>
          {!isLoading ? (
            products.map((product: Product) => (
              <ProductCard
                key={product.productId}
                product={product}
                isLoading={isLoading}
              />
            ))
          ) : (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <ProductCard key={index} isLoading={isLoading} />
              ))}
            </>
          )}
        </>
      )}
    </Box>
  );
};
