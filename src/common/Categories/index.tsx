import { Link, useParams } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { categories } from "./categories";

type CategoriesProps = {
  title: string;
};

export const Categories = ({ title }: CategoriesProps) => {
  const theme = useTheme();
  const { category } = useParams();

  return (
    <Box width="100%" display="flex" flexDirection="column" gap="2rem">
      <Typography variant="h2">{title}</Typography>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper-container"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.title}>
            <Box
              component={Link}
              to={
                title === "Top Categories"
                  ? `/${item.query}`
                  : `/${item.query}/all`
              }
              state={{ preventScrollToTop: true }}
              width={{ xs: "5rem", sm: "6rem", md: "7rem" }}
              height={{ xs: "5rem", sm: "6rem", md: "7rem" }}
              border={
                title === "Related Items"
                  ? "none"
                  : `2px solid ${theme.palette.primary.main}`
              }
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor={
                title === "Related Items"
                  ? "rgba(46, 171, 92, 0.1)"
                  : category === item.query
                  ? "rgba(46, 171, 92, 0.1)"
                  : "#f9fafb"
              }
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
