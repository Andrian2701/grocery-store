import { useRef } from "react";
import { Box } from "@mui/material";
import { PageLoader } from "../../components";
import { CheckoutButton, CheckoutForm, CheckoutSummary } from "./components";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { PageWrapper } from "../../styled-components";
import { useGetCartItems } from "../../hooks/useGetCartItems";
import { useCountCartTotal } from "../../hooks/useCountCartTotal";

export const CheckoutPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const currentUser = useGetCurrentUser();
  const cartItems = useGetCartItems(currentUser?.uid);
  const total = useCountCartTotal(cartItems);

  if (!currentUser || !cartItems) {
    return <PageLoader />;
  }

  return (
    <PageWrapper
      sx={{
        alignItems: "flex-start",
        gap: "2rem",
        flexDirection: { xs: "column ", lg: "row" },
      }}
    >
      <CheckoutForm
        currentUser={currentUser}
        cartItems={cartItems}
        formRef={formRef}
      />
      <Box
        width={{ lg: 325, xs: "100%" }}
        display="flex"
        flexDirection="column"
        gap="2rem"
      >
        <CheckoutSummary itemsQ={cartItems.length} total={total} />
        <CheckoutButton formRef={formRef} total={total} />
      </Box>
    </PageWrapper>
  );
};
