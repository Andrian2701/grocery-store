import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { Navbar } from "..";

export const Hamburger = () => {
  const theme = useTheme();
  const [hamburger, setHamburger] = useState({
    left: false,
  });

  const toggleHamburger =
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
        onClick={toggleHamburger("left", true)}
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
        onClose={toggleHamburger("left", false)}
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
            <IconButton onClick={toggleHamburger("left", false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Navbar
              children={
                <>
                  <MenuItem component={Link} to="#">
                    Login
                  </MenuItem>
                  <MenuItem component={Link} to="#">
                    Logout
                  </MenuItem>
                </>
              }
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
