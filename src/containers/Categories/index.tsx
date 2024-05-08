import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { categories } from "./categories";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

export const Categories = () => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Typography variant="h2">Top Categories</Typography>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={40}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper-container"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.title}>
            <Box
              width={{ xs: "5rem", sm: "6rem", md: "7rem" }}
              height={{ xs: "5rem", sm: "6rem", md: "7rem" }}
              border={`2px solid ${theme.palette.primary.main}`}
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                transitionDuration: "0.2s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(46, 171, 92, 0.1)",
                },
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                width="70%"
                height="70%"
              />
            </Box>
            <Typography
              variant="subtitle1"
              color={theme.palette.secondary.main}
              fontSize={{ xs: 11.5, md: 13.5 }}
              width="100%"
              textAlign="center"
            >
              {item.title}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
