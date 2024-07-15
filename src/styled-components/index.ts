import { Box, styled } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "80px",
  padding: "0 16px 48px 16px",
  [theme.breakpoints.up("sm")]: {
    padding: "0 24px 48px 24px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 48px 48px 48px",
  },
}));
