import { useDispatch } from "react-redux";
import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import { EditAccountForm } from "../../containers";
import { ModalWindow } from "../../components";
import { openModal } from "../../features/ModalWindow/ModalWindowSlice";
import { User } from "./types";
import avatar from "../../assets/avatar.jpeg";

type AccountProps = {
  currentUser: User;
};

export const AccountCard = ({ currentUser }: AccountProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleOpenModal = () => dispatch(openModal(<EditAccountForm />));

  const handleFormatName = (fullName: string) => {
    const parts = fullName.split(" ");

    return parts.length === 2 ? (
      <>
        {parts[0]} <br /> {parts[1]}
      </>
    ) : (
      <>{fullName}</>
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Typography variant="h2">My Account</Typography>
      <Box display="flex" gap="2rem">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#e1e6f0"
          borderRadius={999}
          width={{ xs: 80, sm: 100, md: 120 }}
          height={{ xs: 80, sm: 100, md: 120 }}
          sx={{
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            src={avatar}
            alt="avatar"
            sx={{ borderRadius: 999, width: "100%", height: "100%" }}
          />
        </Box>
        <Box>
          <Typography variant="h4" fontSize={18}>
            {handleFormatName(currentUser?.displayName ?? "")}
          </Typography>
          <Typography variant="subtitle1" marginTop="0.5rem">
            {currentUser?.email}
          </Typography>
          <MenuItem
            onClick={handleOpenModal}
            sx={{
              color: theme.palette.primary.main,
              marginTop: "2rem",
            }}
          >
            Set Delivery Address
          </MenuItem>
          <ModalWindow />
        </Box>
      </Box>
    </Box>
  );
};
