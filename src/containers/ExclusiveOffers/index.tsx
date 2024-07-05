import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { ProductCard } from "../../components";
import { Product } from "../../components/ProductCard/types";
import { useGetProductsQuery } from "../../store/features/Products/ProductsSlice";

export const ExclusiveOffers = () => {
  const theme = useTheme();
  const { category } = useParams();
  const { data: products, isLoading } = useGetProductsQuery(category);

  const productsToShow = useMemo(
    () => products?.data.filter((product: Product, index: number) => index < 7),

    [products]
  );

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h2">Exclusive Offers</Typography>
        <Typography
          variant="subtitle1"
          component={Link}
          to={`/${category}/stock/all`}
          sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
        >
          See all
        </Typography>
      </Box>
      <Box className="container-two">
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={10}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="swiper-container"
        >
          {isLoading ? (
            <>
              {Array.from({ length: 7 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <ProductCard isLoading={isLoading} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {productsToShow.map((product: Product) => (
                <SwiperSlide key={product.productId}>
                  <ProductCard product={product} isLoading={isLoading} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </Box>
    </Box>
  );
};
