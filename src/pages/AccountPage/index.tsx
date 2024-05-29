import { useEffect, useState } from "react";
import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { PageLoader, AccountCard } from "../../components";
import { User } from "../../components/AccountCard/types";
import { auth } from "../../utils/firebase";

export const AccountPage = () => {
  const theme = useTheme();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (user: any) => user && setCurrentUser(user)
    );

    return () => unsub();
  }, [auth]);

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
          <AccountCard />
          <Box display="flex" flexDirection="column" gap="2rem">
            <Typography variant="h2">Address</Typography>
            <Box display="flex" gap="2rem">
              <Box>
                <Typography variant="subtitle1" marginTop="0.5rem">
                  Osvytska 19,
                  <br />
                  Lviv
                </Typography>
                <MenuItem
                  sx={{ color: theme.palette.primary.main, marginTop: "2rem" }}
                >
                  Change Delivery Address
                </MenuItem>
              </Box>
            </Box>
          </Box>

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
