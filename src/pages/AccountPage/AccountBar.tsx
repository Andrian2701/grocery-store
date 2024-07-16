import { useDispatch } from "react-redux";
import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import { openModal } from "../../store/features/ModalWindow/ModalWindowSlice";
import { CurrentUser } from "../../types";
import avatar from "../../assets/avatar.jpeg";

type AccountBarProps = {
  currentUser: CurrentUser;
};

export const AccountBar = ({ currentUser }: AccountBarProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();

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
          width={{ xs: 65, sm: 100, md: 120 }}
          height={{ xs: 65, sm: 100, md: 120 }}
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
            onClick={() => dispatch(openModal("EditAccount"))}
            sx={{
              color: theme.palette.primary.main,
              marginTop: "2rem",
            }}
          >
            Change Account Data
          </MenuItem>
        </Box>
      </Box>
    </Box>
  );
};
