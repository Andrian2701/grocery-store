import { Box, MenuItem, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { IoPencilSharp } from "react-icons/io5";
import { openModal } from "../../store/features/ModalWindow/ModalWindowSlice";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useNavigate } from "react-router-dom";

type AddressBarProps = {
  address: string;
  title?: string;
};

export const AddressBar = ({ address, title }: AddressBarProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentUser = useGetCurrentUser();
  const navigate = useNavigate();

  const handleOnIconClick = () => {
    currentUser ? dispatch(openModal("SetAddress")) : navigate("/login");
  };

  return (
    <>
      {title ? (
        <>
          <Box display="flex" flexDirection="column" gap="2rem">
            <Typography variant="h2">Address</Typography>
            <Box display="flex" gap="2rem">
              <Box>
                <Typography variant="subtitle1" marginTop="0.5rem">
                  {address ? address : "Not provided"}
                </Typography>
                <MenuItem
                  onClick={() => dispatch(openModal("SetAddress"))}
                  sx={{
                    color: theme.palette.primary.main,
                    marginTop: "2rem",
                  }}
                >
                  Change Delivery Address
                </MenuItem>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={handleOnIconClick}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <FmdGoodRoundedIcon sx={{ color: theme.palette.primary.main }} />
              <Typography variant="h4">Address:</Typography>
              <Typography variant="h4" fontWeight="400 !important">
                {address ? address.split(",")[0].trim() : "Not provided"}
              </Typography>
            </Box>
            <MenuItem
              sx={{
                padding: "8px",
                color: theme.palette.primary.main,
                fontSize: "1.2rem",
              }}
            >
              <IoPencilSharp />
            </MenuItem>
          </Box>
        </>
      )}
    </>
  );
};
