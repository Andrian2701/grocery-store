import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, useTheme } from "@mui/material";
import {
  getRedirectResult,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import googleIcon from "../../assets/icons/google-icon.webp";
import { setNotification } from "../../store/features/Notification/NotificationSlice";
import { auth, provider } from "../../utils/firebase";

export const GoogleSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleGoogleSignIn = () => signInWithRedirect(auth, provider);

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const res = await getRedirectResult(auth);
        const user = res?.user;
        if (!user) return;

        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: user.displayName,
            photoURL: user.photoURL,
          });

          dispatch(
            setNotification({
              open: true,
              title: "Successful authentication",
              color: theme.palette.primary.main,
            })
          );
          setTimeout(() => {
            navigate("/vegetables");
          }, 2000);
        }
      } catch (error: any) {
        dispatch(
          setNotification({
            open: true,
            title: error.code,
            color: theme.palette.error.main,
          })
        );
      }
    };

    handleRedirect();
  }, [navigate]);

  return (
    <Box
      component="img"
      src={googleIcon}
      alt="Login with Google"
      sx={{
        height: 55,
        cursor: "pointer",
      }}
      onClick={handleGoogleSignIn}
    />
  );
};
