import { useState, useEffect } from "react";
import { Box, Button, styled, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormatQuantity } from "../../../../hooks/useFormatQuantity";

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

type QuantitySelectorProps = {
  units: string;
  quantity: number;
  price: number;
  onQuantityChange: (q: number, totalPrice: number) => void;
};

export const QuantitySelector = ({
  quantity,
  units,
  price,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const theme = useTheme();
  const [q, setQ] = useState(quantity);
  const formattedQuantity = useFormatQuantity(q, units);

  const handleIncrementQ = () =>
    units === "g-kg"
      ? setQ((prevQ) => prevQ + 200)
      : setQ((prevQ) => prevQ + 1);

  const handleDecrementQ = () => {
    if (units === "g-kg" && q > 200) {
      setQ((prevQ) => prevQ - 200);
    } else if (units !== "g-kg" && q > 1) {
      setQ((prevQ) => prevQ - 1);
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () =>
      units === "g-kg" ? price * (q / 1000) : price * q;

    onQuantityChange(q, calculateTotalPrice());
  }, [q, price, onQuantityChange, units]);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap="1rem">
      <SelectButton onClick={handleIncrementQ}>
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
        {formattedQuantity}
      </Box>
      <SelectButton onClick={handleDecrementQ}>
        <RemoveIcon sx={{ fontSize: "1.2rem" }} />
      </SelectButton>
    </Box>
  );
};
