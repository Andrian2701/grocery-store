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
      >
        <Box
          width={{ xs: "100vw", sm: "25rem" }}
          height="100%"
          display="flex"
          flexDirection="column"
          padding="16px"
          gap={4}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4">All Stores</Typography>
            <IconButton onClick={handleToggle("left", false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Navbar navItems={navItems} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
