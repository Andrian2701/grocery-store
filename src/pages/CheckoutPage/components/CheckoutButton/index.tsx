import { Button } from "@mui/material";

type CheckoutButtonProps = {
  formRef: React.MutableRefObject<HTMLFormElement | null>;
  total: string;
};

export const CheckoutButton = ({ formRef, total }: CheckoutButtonProps) => {
  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <Button
      onClick={handleFormSubmit}
      disabled={parseInt(total) < 10 && true}
      sx={{
        width: { lg: 325, xs: "100%" },
      }}
    >
      Order
    </Button>
  );
};
