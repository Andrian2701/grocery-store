import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { Box, MenuItem, IconButton, Typography } from "@mui/material";
import { useGetCurrentUser } from "../../../../hooks/useGetCurrentUser";
import { closeModal } from "../../../../store/features/ModalWindow/ModalWindowSlice";
import { auth, db } from "../../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../theme";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
} from "firebase/auth";
import { setNotification } from "../../../../store/features/Notification/NotificationSlice";
import { deleteDoc, doc } from "firebase/firestore";

export const DeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useGetCurrentUser();

  const handleDeleteAccount = async () => {
    if (!currentUser) return;

    const email = currentUser.email;
    const password = prompt("Please enter your password to confirm");

    if (!email || !password) {
      alert("Email or password missing!");
      return;
    }

    const credential = EmailAuthProvider.credential(email, password);

    try {
      await reauthenticateWithCredential(currentUser, credential);

      await Promise.all([
        deleteDoc(doc(db, "addresses", currentUser.uid)),
        deleteDoc(doc(db, "carts", currentUser.uid)),
        deleteDoc(doc(db, "orders", currentUser.uid)),
        currentUser.delete(),
      ]);

      await signOut(auth).then(() => {
        dispatch(closeModal());
        navigate("/login");
      });
      navigate("/login");
    } catch (err: any) {
      dispatch(closeModal());
      dispatch(
        setNotification({
          open: true,
          title: `${err.code}`,
          color: "#d32f2f",
        })
      );
      setTimeout(() => dispatch(setNotification({ open: false })), 1500);
    }
  };

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
        height: { xs: "100vh", sm: "auto" },
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
          Are you sure you want to delete your account and its data? This action
          is irreversible.
        </Typography>
        <Box display="flex" gap="2rem">
          <MenuItem
            sx={{ color: theme.palette.primary.main }}
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </MenuItem>
          <MenuItem
            sx={{
              color: "#d32f2f",
              "&:hover": {
                color: "#d32f2f",
              },
            }}
            onClick={handleDeleteAccount}
          >
            Delete
          </MenuItem>
        </Box>
      </Box>
    </Box>
  );
};
