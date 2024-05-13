import { useState } from "react";
import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { Navbar } from "..";
import { navItems } from "../navItems";

export const Hamburger = () => {
  const theme = useTheme();
  const [hamburger, setHamburger] = useState({
    left: false,
  });

  const handleToggle =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setHamburger({ ...hamburger, [anchor]: open });
    };

  return (
    <>
      <IconButton
        onClick={handleToggle("left", true)}
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
        anchor={"left"}
        open={hamburger["left"]}
        onClose={handleToggle("left", false)}
        sx={{ position: "relative" }}
      >
        <Box
          width={{ xs: "100vw", sm: "25rem" }}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="fixed"
            height={{ xs: 56, sm: 64 }}
            width={{ xs: "100%", sm: 400 }}
            padding={{ xs: "0 16px 0 16px", sm: "0 24px 0 24px" }}
          >
            <Typography variant="h4">All</Typography>
            <IconButton onClick={handleToggle("left", false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            marginTop={10}
            padding={{
              xs: "0 16px 16px 16px",
              sm: "0 24px 16px 24px",
            }}
          >
            <Navbar navItems={navItems} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
