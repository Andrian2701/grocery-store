import { Box, CircularProgress } from "@mui/material";

type PageLoaderProps = {
  darkOverlay?: boolean;
};

export const PageLoader = ({ darkOverlay }: PageLoaderProps) => {
  return (
    <Box
      position="fixed"
      width="100vw"
      height="100vh"
      top={0}
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={1000}
      bgcolor={darkOverlay ? "rgba(0, 0, 0, 0.5)" : "#ffffff"}
      p={{
        xs: "0 16px 48px 16px",
        sm: "0 24px 48px 24px",
        md: "0 48px 48px 48px",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
