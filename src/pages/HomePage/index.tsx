import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Categories } from "../../components";
import bannerImg from "../../assets/banner.jpeg";

export const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="2.5rem"
      marginTop={10}
      padding={{
        xs: "0 16px 48px 16px",
        sm: "0 24px 48px 24px",
        md: "0 48px 48px 48px",
      }}
    >
      <Box width="100%" height={{ xs: "10rem", sm: "15rem", md: "20rem" }}>
        <Box
          component="img"
          src={bannerImg}
          alt="Fresh & Healthy Vegetables"
          width="100%"
          height="100%"
          borderRadius="0.5rem"
        />
      </Box>
      <Categories />
      <Outlet />
    </Box>
  );
};
