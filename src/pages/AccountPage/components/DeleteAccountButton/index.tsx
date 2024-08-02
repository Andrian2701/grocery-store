import { Button, lighten } from "@mui/material";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../store/features/ModalWindow/ModalWindowSlice";

export const DeleteAccountButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      sx={{
        width: { xs: "100%", md: 325 },
        border: "1px solid #d32f2f",
        color: "#d32f2f",
        bgcolor: "transparent",
        "&:hover": {
          bgcolor: lighten("#d32f2f", 0.9),
        },
      }}
      onClick={() => dispatch(openModal("DeleteAccount"))}
    >
      Delete Account
    </Button>
  );
};
