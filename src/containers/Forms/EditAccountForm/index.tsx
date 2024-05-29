import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateEmail, updateProfile } from "firebase/auth";
import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Box,
  MenuItem,
  useTheme,
  OutlinedInput,
  Button,
  IconButton,
} from "@mui/material";
import { FormError } from "../../../components";
import { auth } from "../../../utils/firebase";

export const EditAccountForm = () => {
  const theme = useTheme();
  const user = auth.currentUser;
  const [openModal, setOpenModal] = useState<boolean>(false);
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

  const handleOpenModal = () => setOpenModal(!openModal);
  const handleCloseModal = () => setOpenModal(!openModal);

  const handleFormSubmit = async (formData: any) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      await updateEmail(auth.currentUser, formData.email);

      handleCloseModal();
    }
  };

  return (
    <>
      <MenuItem
        onClick={handleOpenModal}
        sx={{ color: theme.palette.primary.main, marginTop: "2rem" }}
      >
        Change Personal Data
      </MenuItem>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            borderRadius: 2,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            bgcolor: "#ffffff",
            width: { xs: "22.5rem", sm: "25rem" },
            p: {
              xs: "18px 16px 18px 16px",
              sm: "22px 20px 22px 20px",
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
              width: 325,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              marginTop: "3.2rem",
            }}
          >
            <OutlinedInput
              id="name"
              type="name"
              placeholder="Name"
              className={`form-control ${errors.name && "invalid"}`}
              {...register("name", { required: "Name is Required" })}
              onKeyUp={() => {
                trigger("name");
              }}
              onKeyDown={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
            {errors.name && <FormError errMessage={errors.name?.message} />}
            <OutlinedInput
              id="email"
              type="email"
              placeholder="Email"
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
              <MenuItem sx={{ color: theme.palette.primary.main }}>
                Save
              </MenuItem>
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
