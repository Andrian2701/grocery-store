import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../store/features/Products/ProductsSlice";
import { ProductCard } from "../../common";
import { Product } from "../../types";
import { PageWrapper } from "../PageWrapper";

export const AllProductsPage = () => {
  const { category } = useParams();
  const { data: Products, isLoading } = useGetProductsQuery(category);

  return (
    <PageWrapper flexWrap="wrap" justifyContent="center" gap="10px">
      {!isLoading ? (
        Products.data.map((product: Product) => (
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
    </PageWrapper>
  );
};
