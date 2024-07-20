import { ReactNode, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";

type FiltersWrapperProps = {
  children: ReactNode;
};

export const FiltersWrapper = ({ children }: FiltersWrapperProps) => {
  const [filter, setFilter] = useState<boolean>(false);

  return (
    <>
      <IconButton onClick={() => setFilter(true)} sx={{ cursor: "pointer" }}>
        <TuneIcon />
      </IconButton>
      {filter && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "#ffffff",
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            p: 0,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height={{ xs: 56, sm: 64 }}
            padding={{ xs: "0 16px", sm: "0 24px" }}
          >
            <Typography variant="h4">Filter</Typography>
            <IconButton onClick={() => setFilter(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            height="100%"
            overflow="auto"
            padding={{ xs: "0 16px 16px 16px", sm: "0 24px 16px 24px" }}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};
