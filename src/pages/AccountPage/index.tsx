import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { PageLoader, AccountCard, AddressCard } from "../../components";
import { User } from "../../components/AccountCard/types";
import { auth } from "../../utils/firebase";
import { useGetAddressQuery } from "../../features/Address/AddressSlice";

export const AccountPage = () => {
  const theme = useTheme();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { data, isLoading } = useGetAddressQuery(currentUser?.uid);

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (user: any) => user && setCurrentUser(user)
    );

    return () => unsub();
  }, []);

  return (
    <>
      {currentUser && !isLoading ? (
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
          <AddressCard address={data?.address} title="Address" />
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
