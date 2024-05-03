import { useTheme } from "@mui/material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { Navbar, Hamburger } from "..";
import { navItems } from "../navItems";
import avatar from "../../../assets/avatar.jpeg";

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
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#e1e6f0"
            borderRadius={2}
            width={35}
            height={35}
          >
            <Box
              component="img"
              src={avatar}
              alt="avatar"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
