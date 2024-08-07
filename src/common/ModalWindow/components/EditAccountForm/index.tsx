import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  MenuItem,
  useTheme,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { FormError } from "../../..";
import { auth } from "../../../../utils/firebase";
import { closeModal } from "../../../../store/features/ModalWindow/ModalWindowSlice";
import { setNotification } from "../../../../store/features/Notification/NotificationSlice";

export const EditAccountForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = auth.currentUser;
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
    },
  });

  const handleFormSubmit = async (formData: any) => {
    if (auth.currentUser) {
      const email = auth.currentUser.email;
      const password = prompt("Please enter your password to confirm");

      if (!email || !password) {
        alert("Email or password missing!");
        return;
      }

      const credential = EmailAuthProvider.credential(email, password);

      try {
        await reauthenticateWithCredential(auth.currentUser, credential);

        await updateProfile(auth.currentUser, {
          displayName: formData.name,
        });
        await updateEmail(auth.currentUser, formData.email);

        dispatch(closeModal());
        dispatch(
          setNotification({
            open: true,
            title: `Successfull changes`,
            color: theme.palette.primary.main,
          })
        );
        setTimeout(() => dispatch(setNotification({ open: false })), 1500);
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
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        bgcolor: "#f9fafb",
        borderRadius: { sm: 2 },
        height: { xs: "100vh", sm: "auto" },
        width: { xs: "100vw", sm: "26.3rem" },
        p: {
          xs: "22px 16px 22px 16px",
          sm: "22px 48px 22px 48px",
        },
      }}
    >
      <IconButton
        onClick={() => dispatch(closeModal())}
        sx={{ position: "absolute", right: 10, top: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginTop: "3.2rem",
        }}
      >
        <TextField
          id="name"
          type="name"
          label="Name"
          variant="outlined"
          className={`form-control ${errors.name && "invalid"}`}
          {...register("name", { required: "Name is Required" })}
          onKeyUp={() => {
            trigger("name");
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          sx={{
            width: 325,
            "@media (max-width: 746px)": {
              width: "100%",
            },
          }}
        />
        {errors.name && <FormError errMessage={errors.name?.message} />}
        <TextField
          id="email"
          type="email"
          label="Email"
          variant="outlined"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={Boolean(errors.email)}
          onKeyUp={() => {
            trigger("email");
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          sx={{
            width: 325,
            "@media (max-width: 746px)": {
              width: "100%",
            },
          }}
        />
        {errors.email && <FormError errMessage={errors.email?.message} />}
        <Button
          type="submit"
          sx={{
            p: 0,
            margin: 0,
            width: 36,
            height: 22,
            bgcolor: "transparent",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          <MenuItem sx={{ color: theme.palette.primary.main }}>Save</MenuItem>
        </Button>
      </form>
    </Box>
  );
};
