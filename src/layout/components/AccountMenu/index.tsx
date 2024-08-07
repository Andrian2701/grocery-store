import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Menu, MenuItem, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { openModal } from "../../../store/features/ModalWindow/ModalWindowSlice";
import { useGetCurrentUser } from "../../../hooks/useGetCurrentUser";
import avatar from "../../../assets/avatar.jpeg";

export const AccountMenu = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentUser = useGetCurrentUser();

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
                xs: "18px 16px 18px 16px",
                sm: "22px 20px 22px 20px",
              },
            },
          },
        }}
      >
        <MenuItem
          component={Link}
          to="/account"
          sx={{ backgroundColor: "#ffffff !important" }}
          onClick={handleCloseMenu}
        >
          My account
        </MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem
          onClick={() => dispatch(openModal("Logout"))}
          color={theme.palette.primary.main}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
