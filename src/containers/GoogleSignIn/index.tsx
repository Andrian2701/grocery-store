import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, useTheme } from "@mui/material";
import {
  getRedirectResult,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import googleIcon from "../../assets/google-icon.webp";
import { setNotification } from "../../features/Notification/NotificationSlice";
import { auth, db, provider } from "../../utils/firebase";

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

        const usersRef = doc(db, "users", user.uid);
        const userData = await getDoc(usersRef);

        if (!userData.exists()) {
          if (auth.currentUser) {
            await updateProfile(auth.currentUser, {
              displayName: user.displayName,
            });
          }
          await setDoc(usersRef, {
            user: {
              uid: user.uid,
              name: user.displayName,
              email: user.email,
            },
            shopCart: arrayUnion(),
          });

          dispatch(
            setNotification({
              open: true,
              title: "Successful authentication",
              color: theme.palette.primary.main,
            })
          );
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          dispatch(
            setNotification({
              open: true,
              title: "Successful authentication",
              color: theme.palette.primary.main,
            })
          );
          setTimeout(() => {
            navigate("/");
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
