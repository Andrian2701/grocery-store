import { useTheme } from "@mui/material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { Navbar, Hamburger } from "..";
import { ProfileMenu } from "../../../components";
import { navItems } from "../navItems";

export const Header = () => {
  const theme = useTheme();

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
            xs: "0 16px 0px 16px",
            sm: "0 24px 0px 24px",
            md: "0 48px 0px 48px",
          },
        }}
      >
        <Hamburger />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={0.5}
        >
          <FmdGoodRoundedIcon sx={{ color: theme.palette.primary.main }} />
          <Typography variant="h4">Kyiv</Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Box
            display={{ xs: "none", sm: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Navbar navItems={navItems.slice(4)} fontSize={13.5} />
          </Box>
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
