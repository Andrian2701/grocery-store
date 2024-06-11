import { AppBar, Box, Toolbar } from "@mui/material";
import { Navbar, Hamburger, AccountMenu } from "..";
import { navItems } from "../navItems";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        backdropFilter: "blur(6px)",
        bgcolor: "rgba(249, 250, 251, 0.8)",
        transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        zIndex: "2",
        height: { xs: 56, sm: 64 },
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: "0 16px",
            sm: "0 24px",
            md: "0 48px",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          height={{ xs: "2.5rem", sm: "2.5rem", md: "3rem" }}
        >
          <Hamburger />
          <Box
            width="6.5rem"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            component={Link}
            to="/"
          >
            <Box
              src={Logo}
              component="img"
              alt="logo"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        {/* <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={0.5}
        >
          <FmdGoodRoundedIcon sx={{ color: theme.palette.primary.main }} />
          <Typography variant="h4">Kyiv</Typography>
        </Box> */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box
            display={{ xs: "none", sm: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Navbar navItems={navItems.slice(4)} fontSize={13.5} />
          </Box>
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
