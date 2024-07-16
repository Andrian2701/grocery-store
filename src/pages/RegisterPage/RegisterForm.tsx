import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { FormData } from "../../types";
import { setNotification } from "../../store/features/Notification/NotificationSlice";
import { FormError } from "../../common";

export const RegisterForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFormSubmit = async (formData: FormData) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: formData.name,
        });
      }

      dispatch(
        setNotification({
          open: true,
          title: "Successful authentication",
          color: theme.palette.primary.main,
        })
      );
      setTimeout(() => {
        dispatch(
          setNotification({
            open: false,
          })
        ),
          navigate("/vegetables");
      }, 1500);
    } catch (error: any) {
      dispatch(
        setNotification({
          open: true,
          title: `${error.code}`,
          color: theme.palette.error.main,
        })
      );
    }
  };

  return (
    <>
      <Link to="/auth">
        <IconButton sx={{ position: "absolute", right: 10, top: 10 }}>
          <CloseIcon />
        </IconButton>
      </Link>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { sx: "100%", sm: "25rem" },
          minHeight: "100vh",
        }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Typography variant="h1">Register</Typography>
            <Typography variant="subtitle1">
              Let's fill your cart with our goodies!
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
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
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              className={`form-control ${errors.password && "invalid"}`}
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be more than 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
              error={Boolean(errors.password)}
              placeholder="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: theme.palette.secondary.light }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && (
              <FormError errMessage={errors.password?.message} />
            )}
            <Button type="submit">Register</Button>
            <Typography variant="subtitle1">
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Login
              </Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </>
  );
};
