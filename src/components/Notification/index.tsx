import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type NotificationState = {
  notification: {
    notification: {
      vertical: "top" | "bottom";
      horizontal: "left" | "center" | "right";
      open: boolean;
      title: string;
      color: string;
    };
  };
};

export const Notification = () => {
  const { vertical, horizontal, open, title, color } = useSelector(
    (state: NotificationState) => state.notification.notification
  );

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical, horizontal }}
      sx={{ marginTop: { xs: "40px", sm: 0 } }}
    >
      <Alert
        variant="filled"
        sx={{
          borderBottom: `3px solid ${color}`,
          "& .MuiAlert-icon": {
            color: color,
          },
        }}
        icon={
          color === "#d32f2f" ? (
            <CancelOutlinedIcon />
          ) : (
            <CheckCircleOutlineOutlinedIcon />
          )
        }
      >
        {title}
      </Alert>
    </Snackbar>
  );
};
