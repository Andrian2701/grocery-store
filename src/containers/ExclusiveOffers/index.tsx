import { Link, useParams } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { useGetProductsQuery } from "../../features/Products/ProductsSlice";
import { Product } from "../../features/Products/ProductsSlice";

export const ExclusiveOffers = () => {
  const theme = useTheme();
  const { category } = useParams();
  const { data, isLoading } = useGetProductsQuery(category);

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h2">Exclusive Offers</Typography>
        <Typography
          variant="subtitle1"
          component={Link}
          to="#"
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
            data.data.map((product: Product) => (
              <SwiperSlide key={product.productId}>
                <Box
                  component="img"
                  src={product.imgURL}
                  alt="product"
                  width={{ xs: 130, sm: 150 }}
                  height={{ xs: 130, sm: 150 }}
                />
                <Box>
                  <Typography
                    variant="h2"
                    fontSize="1.2rem !important"
                    textAlign="center"
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize="13.5px !important"
                    textAlign="center"
                  >
                    {product.quantity}pcs, Pricetag
                  </Typography>
                </Box>
                <Box
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h2" fontSize="1.2rem !important">
                    ${product.price}
                  </Typography>
                  <Button
                    sx={{
                      minWidth: "1.8rem",
                      maxWidth: "1.8rem",
                      height: "1.8rem",
                      borderRadius: "0.3rem",
                    }}
                  >
                    <AddIcon sx={{ fontSize: "1.2rem" }} />
                  </Button>
                </Box>
              </SwiperSlide>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </Swiper>
      </Box>
    </Box>
  );
};
