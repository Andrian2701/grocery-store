import { Box, Button, styled, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SelectButton = styled(Button)(({ theme }) => ({
  minWidth: "1.8rem",
  maxWidth: "1.8rem",
  height: "1.8rem",
  borderRadius: "0.3rem",
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  transitionDuration: "0.2s",
  "&:hover": {
    backgroundColor: "rgba(46, 171, 92, 0.1)",
  },
}));

export const QuantitySelector = () => {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap="1rem">
      <SelectButton>
        <AddIcon sx={{ fontSize: "1.2rem" }} />
      </SelectButton>
      <Box
        width="3.5rem"
        height="3rem"
        color={theme.palette.primary.main}
        bgcolor="rgba(46, 171, 92, 0.1)"
        borderRadius="0.3rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight={600}
      >
        2Kg
      </Box>
      <SelectButton>
        <RemoveIcon sx={{ fontSize: "1.2rem" }} />
      </SelectButton>
    </Box>
  );
};
