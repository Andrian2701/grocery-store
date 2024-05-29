import { Box, Typography } from "@mui/material";
import { EditAccountForm } from "../../containers";
import { auth } from "../../utils/firebase";
import avatar from "../../assets/avatar.jpeg";

export const AccountCard = () => {
  const user = auth.currentUser;

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
            {handleFormatName(user?.displayName ?? "")}
          </Typography>
          <Typography variant="subtitle1" marginTop="0.5rem">
            {user?.email}
          </Typography>
          <EditAccountForm />
        </Box>
      </Box>
    </Box>
  );
};
