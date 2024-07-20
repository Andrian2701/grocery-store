import { useParams } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Filters, FiltersWrapper, Products } from "./components";
import { PageWrapper } from "../PageWrapper";
import { useGetProductsQuery } from "../../store/features/Products/ProductsSlice";
import { useFilterProducts } from "../../hooks/useFilterProducts";

export const AllProductsPage = () => {
  const { category } = useParams();
  const { data: products, isLoading } = useGetProductsQuery(category);
  const filteredProducts = useFilterProducts(products?.data);
  const matches = useMediaQuery("(max-width:864px)");

  return (
    <PageWrapper flexDirection="column" gap="1rem">
      <Box display="flex" alignItems="center" gap="8px">
        {matches && (
          <FiltersWrapper>
            <Filters matches={matches} products={products?.data} />
          </FiltersWrapper>
        )}
        <Typography variant="h1">Filters</Typography>
      </Box>
      <Box display="flex" gap="2rem">
        {!matches && <Filters matches={matches} products={products?.data} />}
        <Products
          products={filteredProducts ? filteredProducts : products?.data}
          isLoading={isLoading}
        />
      </Box>
    </PageWrapper>
  );
};
