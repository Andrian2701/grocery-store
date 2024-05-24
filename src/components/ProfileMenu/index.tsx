import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Menu, MenuItem, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import avatar from "../../assets/avatar.jpeg";

export const ProfileMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (user: any) => user && setCurrentUser(user)
    );

    return () => unsub();
  }, [auth]);

  const handleOpenMenu = (event: React.MouseEvent<HTMLImageElement>) =>
    setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <>
      {currentUser ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#e1e6f0",
            borderRadius: 2,
            width: 35,
            height: 35,
            cursor: "pointer",
          }}
        >
          <Box
            width="100%"
            height="100%"
            component="img"
            src={avatar}
            alt="avatar"
            onClick={handleOpenMenu}
          />
        </Box>
      ) : (
        <MenuItem
          component={Link}
          to="login"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            fontSize: 13.5,
            color: theme.palette.primary.main,
          }}
        >
          <PersonIcon sx={{ color: theme.palette.primary.main }} />
          Login
        </MenuItem>
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "0.5rem",
            minWidth: 180,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "& .MuiMenu-list": {
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: {
                xs: "10px 16px 10px 16px",
                sm: "10px 24px 10px 24px",
              },
            },
          },
        }}
      >
        <MenuItem sx={{ backgroundColor: "#ffffff !important" }}>
          My account
        </MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem
          sx={{ color: theme.palette.primary.main }}
          onClick={() => signOut(auth).then(() => navigate("/login"))}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
