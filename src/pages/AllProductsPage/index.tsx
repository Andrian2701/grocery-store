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
          <Box
            key={product.productId}
            width={{
              xs: "216px !important",
              md: "224px !important",
            }}
            height={{
              xs: "269.46px !important",
              md: "289.46px !important",
            }}
            padding="1rem 1rem 1rem 1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="1rem"
            bgcolor="#ffffff"
            sx={{ cursor: "pointer" }}
          >
            <ProductCard
              key={product.productId}
              product={product}
              isLoading={isLoading}
            />
          </Box>
        ))
      ) : (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              width={{
                xs: "216px !important",
                md: "224px !important",
              }}
              height={{
                xs: "269.46px !important",
                md: "289.46px !important",
              }}
              padding="1rem 1rem 1rem 1rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              borderRadius="1rem"
              bgcolor="#ffffff"
              sx={{ cursor: "pointer" }}
            >
              <ProductCard key={index} isLoading={isLoading} />
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};
