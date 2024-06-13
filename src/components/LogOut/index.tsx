import CloseIcon from "@mui/icons-material/Close";
import { Box, MenuItem, useTheme, IconButton, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/ModalWindow/ModalWindowSlice";

export const LogOut = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: { sm: 2 },
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        bgcolor: "#ffffff",
        width: { xs: "100vw", sm: "25rem" },
        height: { xs: "100vh", sm: "186.2px" },
        p: {
          xs: "22px 16px",
          sm: "22px 48px",
        },
      }}
    >
      <IconButton
        onClick={() => dispatch(closeModal())}
        sx={{ position: "absolute", right: 10, top: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginTop: "3.2rem",
        }}
      >
        <Typography variant="subtitle1" textAlign="center">
          Do you want to logout? You can always log back in whenever you want.
        </Typography>
        <MenuItem
          sx={{ color: theme.palette.primary.main }}
          onClick={() => signOut(auth).then(() => navigate("/login"))}
        >
          Logout
        </MenuItem>
      </Box>
    </Box>
  );
};
