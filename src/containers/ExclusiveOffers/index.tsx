import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { ProductCard } from "../../components";
import { useGetProductsQuery } from "../../features/Products/ProductsSlice";
import { Product } from "../../components/ProductCard/types";

export const ExclusiveOffers = () => {
  const theme = useTheme();
  const { category } = useParams();
  const { data, isLoading } = useGetProductsQuery(category);

  const memoizedProducts = useMemo(
    () =>
      Array.isArray(data?.data) &&
      data.data.filter((product: Product) => product.productId < 7),

    [data]
  );

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h2">Exclusive Offers</Typography>
        <Typography
          variant="subtitle1"
          component={Link}
          to={`/${category}/all`}
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
          {!isLoading ? (
            memoizedProducts.map((product: Product) => (
              <SwiperSlide key={product.name}>
                <ProductCard product={product} isLoading={isLoading} />
              </SwiperSlide>
            ))
          ) : (
            <>
              {Array.from({ length: 7 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <ProductCard isLoading={isLoading} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </Box>
    </Box>
  );
};
