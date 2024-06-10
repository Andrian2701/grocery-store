import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import { SetAddress } from "./SetAddress";
import { ModalWindow } from "../ModalWindow";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/ModalWindow/ModalWindowSlice";

export const AddressCard = ({ address }: { address: string }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleOpenModal = () => dispatch(openModal(<SetAddress />));

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Typography variant="h2">Address</Typography>
      <Box display="flex" gap="2rem">
        <Box>
          <Typography variant="subtitle1" marginTop="0.5rem">
            {address ? address : "Address isn't provided"}
          </Typography>
          <MenuItem
            onClick={handleOpenModal}
            sx={{
              color: theme.palette.primary.main,
              marginTop: "2rem",
            }}
          >
            Set Delivery Address
          </MenuItem>
          <ModalWindow />
        </Box>
      </Box>
    </Box>
  );
};
