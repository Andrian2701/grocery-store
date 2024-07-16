import { Box, Typography, useTheme } from "@mui/material";
import { AccountBar } from "./AccountBar";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useGetAddress } from "../../hooks/useGetAddress";
import { AddressBar, PageLoading } from "../../common";
import { PageWrapper } from "../PageWrapper";

export const AccountPage = () => {
  const theme = useTheme();
  const currentUser = useGetCurrentUser();
  const address = useGetAddress(currentUser?.uid);

  if (!currentUser) {
    return <PageLoading />;
  }

  return (
    <PageWrapper flexDirection="column" gap="2rem">
      <AccountBar currentUser={currentUser} />
      <AddressBar currentUser={currentUser} address={address} title="Address" />
      <Box display="flex" flexDirection="column" gap="2rem">
        <Typography variant="h2">Order Translations</Typography>
        <Box display="flex" gap="2rem">
          <Box display="flex" gap="2rem">
            <Box
              sx={{
                borderRadius: 999,
                border: `2px solid ${theme.palette.primary.main}`,
                padding: "0.5rem 2rem 0.5rem 2rem",
                transitionDuration: "0.2s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
                fontSize={13.5}
              >
                Current Orders
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: 999,
                border: `2px solid ${theme.palette.primary.main}`,
                padding: "0.5rem 2rem 0.5rem 2rem",
                transitionDuration: "0.2s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
                fontSize={13.5}
              >
                Cart
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};
