import { Box, Typography, useTheme } from "@mui/material";
import { PageLoader, AccountCard, AddressCard } from "../../components";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useGetAddress } from "../../hooks/useGetAddress";

export const AccountPage = () => {
  const theme = useTheme();
  const currentUser = useGetCurrentUser();
  const address = useGetAddress(currentUser?.uid);

  return (
    <>
      {currentUser ? (
        <Box
          display="flex"
          flexDirection="column"
          gap="2rem"
          marginTop={10}
          padding={{
            xs: "0 16px 48px 16px",
            sm: "0 24px 48px 24px",
            md: "0 48px 48px 48px",
          }}
        >
          <AccountCard currentUser={currentUser} />
          <AddressCard address={address} title="Address" />
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
        </Box>
      ) : (
        <PageLoader />
      )}
    </>
  );
};
