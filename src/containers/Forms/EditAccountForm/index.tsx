import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateEmail, updateProfile } from "firebase/auth";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  MenuItem,
  useTheme,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { FormError } from "../../../components";
import { auth } from "../../../utils/firebase";
import { closeModal } from "../../../features/ModalWindow/ModalWindowSlice";

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

  const handleCloseModal = () => dispatch(closeModal());

  const handleFormSubmit = async (formData: any) => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      updateEmail(auth.currentUser, formData.email);

      handleCloseModal();
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
        onClick={handleCloseModal}
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
