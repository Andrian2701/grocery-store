import { Box, Skeleton } from "@mui/material";

export const LoadingCard = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        animation="pulse"
        sx={{
          width: "100%",
          height: { xs: 130, sm: 150 },
        }}
      />
      <Box width="100%">
        <Skeleton variant="text" animation="pulse" width="100%" height={23} />
        <Skeleton variant="text" animation="pulse" width="100%" height={23} />
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Skeleton variant="text" animation="pulse" width={52} height={23} />
      </Box>
    </>
  );
};
