import { Box } from "@mui/material";
import { Categories } from "../../containers";
import bannerImg from "../../assets/banner.jpeg";

export const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="2rem"
      marginTop={10}
      padding={{
        xs: "0 16px 16px 16px",
        sm: "0 24px 16px 24px",
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
    </Box>
  );
};
