import { useState } from "react";
import { Backdrop, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Categories } from "../../components";
import { SearchItems } from "../../containers";
import bannerImg from "../../assets/banner.jpeg";

export const HomePage = () => {
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);

  return (
    <>
      <Backdrop
        open={openBackdrop}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="2rem"
        >
          <SearchItems
            openBackdrop={openBackdrop}
            setOpenBackDrop={setOpenBackdrop}
          />
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
        </Box>
        <Categories title="Top Categories" />
        <Outlet />
      </Box>
    </>
  );
};
