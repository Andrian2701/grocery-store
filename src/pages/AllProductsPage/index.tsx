import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useGetProductsQuery } from "../../features/Products/ProductsSlice";
import { Product } from "../../components/ProductCard/types";
import { ProductCard } from "../../components";

export const AllProductsPage = () => {
  const { category } = useParams();
  const { data, isLoading } = useGetProductsQuery(category);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="10px"
      marginTop={10}
      padding={{
        xs: "0 16px 48px 16px",
        sm: "0 24px 48px 24px",
        md: "0 48px 48px 48px",
      }}
    >
      {!isLoading ? (
        data.data.map((product: Product) => (
          <ProductCard
            key={product.name}
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
    </Box>
  );
};
