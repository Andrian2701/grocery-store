import { useState } from "react";
import { Navbar } from "..";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddressCard } from "../../../components";
import { navItems } from "../navItems";
import { useToggleDrawer } from "../../../hooks/useToggleDrawer";
import { useGetAddress } from "../../../hooks/useGetAddress";
import { useGetCurrentUser } from "../../../hooks/useGetCurrentUser";

export const Hamburger = () => {
  const theme = useTheme();
  const [hamburger, setHamburger] = useState({
    left: false,
  });
  const currentUser = useGetCurrentUser();
  const toggleDrawer = useToggleDrawer(setHamburger, "left");
  const address = useGetAddress(currentUser?.uid);

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: theme.palette.secondary.main,
          display: { xs: "block", sm: "block", md: "none" },
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
        }}
      >
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={hamburger.left}
        onClose={toggleDrawer(false)}
        sx={{ position: "relative" }}
      >
        <Box
          width={{ xs: "100vw", sm: "35rem" }}
          height="100vh"
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height={{ xs: 56, sm: 64 }}
            width="100%"
            padding={{ xs: "0 16px", sm: "0 24px" }}
          >
            <Typography variant="h4">All</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex={1}
            height="100%"
            overflow="auto"
            padding={{ xs: "0 16px 16px 16px", sm: "0 24px 16px 24px" }}
            gap={4}
          >
            <AddressCard address={address} />
            <Navbar navItems={navItems} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
