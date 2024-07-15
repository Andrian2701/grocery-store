import { Box, OutlinedInput, Typography } from "@mui/material";
import { PageLoader } from "../../../../components";
import { InputMask, PaymentMethodCard } from "./components";
import { CartItems, CurrentUser } from "../../../../types";
import { useCheckoutForm } from "../../../../hooks/useCheckoutForm";

type CheckoutFormProps = {
  currentUser: CurrentUser;
  cartItems: CartItems[];
  formRef: React.MutableRefObject<HTMLFormElement | null>;
};

export const CheckoutForm = ({
  currentUser,
  cartItems,
  formRef,
}: CheckoutFormProps) => {
  const { handleSubmit, onSubmit, errors, trigger, register, loadSpinner } =
    useCheckoutForm(currentUser, cartItems);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={4}
        gap={2}
        borderRadius="8px"
        width={{ xs: "100%", lg: "50%" }}
      >
        <Typography variant="h1">Checkout</Typography>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" gap="2rem">
            <Box display="flex" flexDirection="column" gap="1.5rem">
              <Typography variant="subtitle1">Personal Data</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column ", md: "row" },
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <OutlinedInput
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is Required" })}
                  error={Boolean(errors.name)}
                  onKeyUp={() => trigger("name")}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
                <OutlinedInput
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "",
                    },
                  })}
                  error={Boolean(errors.email)}
                  onKeyUp={() => trigger("email")}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column ", md: "row" },
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <OutlinedInput
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                  error={Boolean(errors.address)}
                  onKeyUp={() => trigger("address")}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
                <OutlinedInput
                  type="text"
                  placeholder="Postal Code"
                  inputComponent={InputMask as any}
                  inputProps={{
                    minLength: 4,
                    maxLength: 10,
                    mask: "0000000000",
                  }}
                  {...register("postalCode", { required: true, minLength: 4 })}
                  error={Boolean(errors.postalCode)}
                  onKeyUp={() => trigger("postalCode")}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="1.5rem">
              <Typography variant="subtitle1">Payment Method</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column ", md: "row" },
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <PaymentMethodCard />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column ", md: "row" },
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <OutlinedInput
                  type="text"
                  placeholder="Card Number"
                  inputComponent={InputMask as any}
                  inputProps={{ mask: "0000 0000 0000 0000" }}
                  {...register("cardNumber", { required: true, minLength: 19 })}
                  error={Boolean(errors.cardNumber)}
                  onKeyUp={() => trigger("cardNumber")}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                  sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}
                />
                <Box display="flex" gap="1rem" sx={{ width: "50%" }}>
                  <OutlinedInput
                    type="text"
                    placeholder="MM/YY"
                    inputComponent={InputMask as any}
                    inputProps={{ mask: "00/00" }}
                    {...register("cardExpire", { required: true })}
                    error={Boolean(errors.cardExpire)}
                    onKeyUp={() => trigger("cardExpire")}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    sx={{
                      width: "100%",
                      "@media (min-width: 1175px)": { width: "30%" },
                    }}
                  />
                  <OutlinedInput
                    type="text"
                    placeholder="CVC/CVV"
                    inputComponent={InputMask as any}
                    inputProps={{ mask: "000" }}
                    {...register("cardCVC", {
                      required: true,
                      minLength: 3,
                      maxLength: 3,
                    })}
                    error={Boolean(errors.cardCVC)}
                    onKeyUp={() => trigger("cardCVC")}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    sx={{
                      width: "100%",
                      "@media (min-width: 1175px)": { width: "30%" },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
      {loadSpinner && <PageLoader darkOverlay={true} />}
    </>
  );
};
