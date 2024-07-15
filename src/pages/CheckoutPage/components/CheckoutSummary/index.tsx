import { Box, Divider, Typography } from "@mui/material";
import { Cart } from "../../../../layout/components";
import { theme } from "../../../../theme";

type CheckoutSummaryProps = {
  itemsQ: number;
  total: string;
};

export const CheckoutSummary = ({ itemsQ, total }: CheckoutSummaryProps) => {
  return (
    <Box flexGrow={3} bgcolor="#ffffff" borderRadius="8px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="1rem 1rem"
      >
        <Typography variant="h4">Cart</Typography>
        <Cart />
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" p="1rem 1rem" gap="0.5rem">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1" fontSize="0.8rem">
            Products
          </Typography>
          <Typography color={theme.palette.secondary.main} fontSize="15px">
            {itemsQ}
          </Typography>
        </Box>
        <Box display="flex" gap="1rem" justifyContent="space-between">
          <Typography variant="subtitle1" fontSize="0.8rem">
            Collecting the order
          </Typography>
          <Typography color={theme.palette.secondary.main} fontSize="15px">
            from 10$
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          gap="1rem"
          marginTop="1rem"
        >
          <Typography variant="h4">Total:</Typography>
          <Typography color={theme.palette.secondary.main} fontSize="15px">
            {total}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
