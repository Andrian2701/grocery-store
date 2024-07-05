import { Box } from "@mui/material";
import hero from "../../assets/hero.jpeg";

export const Hero = () => {
  return (
    <Box width="100%" height={{ xs: "10rem", sm: "15rem", md: "20rem" }}>
      <Box
        component="img"
        src={hero}
        alt="Fresh & Healthy Vegetables"
        width="100%"
        height="100%"
        borderRadius="0.5rem"
      />
    </Box>
  );
};
