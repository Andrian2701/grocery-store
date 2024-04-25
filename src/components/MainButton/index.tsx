import { Link } from "react-router-dom";
import { Button, useTheme } from "@mui/material";

type ButtonStyle = {
  backgroundColor: string;
  color: string;
  border: string;
  "&:hover": {
    backgroundColor: string;
  };
};

type MainButtonProps = {
  title: string;
  pathname: string;
  additionalStyles?: ButtonStyle;
};

export const MainButton = ({
  title,
  pathname,
  additionalStyles,
}: MainButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      component={Link}
      to={pathname}
      sx={{
        height: 40,
        bgcolor: theme.palette.secondary.main,
        color: "#ffffff",
        textTransform: "none",
        fontSize: 15,
        fontWeight: 600,
        borderRadius: 2,
        "&:hover": {
          bgcolor: "#2eab5c",
        },
        ...additionalStyles,
      }}
    >
      {title}
    </Button>
  );
};
