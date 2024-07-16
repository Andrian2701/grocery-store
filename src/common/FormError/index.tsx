import { Typography } from "@mui/material";

type FormErrorProps = {
  errMessage: string | undefined;
};

export const FormError = ({ errMessage }: FormErrorProps) => {
  return (
    <Typography
      variant="subtitle1"
      color="#d32f2f"
      width="100%"
      fontSize={12.5}
    >
      {errMessage}
    </Typography>
  );
};
