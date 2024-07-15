import { useState } from "react";
import { Box, Radio, Typography } from "@mui/material";
import { AiTwotoneCreditCard } from "react-icons/ai";
import paypalIcon from "../../../../../../assets/icons/paypal.png";

type Data = {
  id: number;
  title: string;
  value: string;
};

const Data: Data[] = [
  {
    id: 1,
    title: "PayPal",
    value: "a",
  },
  {
    id: 2,
    title: "Credit Or Debit Card Number",
    value: "b",
  },
];

export const PaymentMethodCard = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  return (
    <>
      {Data.map((item) => (
        <Box
          key={item.id}
          display="flex"
          justifyContent="space-between"
          padding="0.5rem 1rem"
          sx={{
            width: "100%",
            fontSize: 12.5,
            borderRadius: 1.5,
            height: 50,
            color: "#050505",
            border: "1px solid rgba(0, 0, 0, 0.23)",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
          >
            {item.id === 1 ? (
              <Box
                component="img"
                alt="PayPal"
                src={paypalIcon}
                width={25}
                height={25}
              />
            ) : (
              <Box display="flex" fontSize="1.5rem">
                <AiTwotoneCreditCard />
              </Box>
            )}
            <Typography variant="h4">{item.title}</Typography>
          </Box>
          <Radio
            name="radio-buttons"
            value={item.value}
            inputProps={{ "aria-label": item.value }}
            checked={selectedValue === item.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedValue(e.target.value)
            }
          />
        </Box>
      ))}
    </>
  );
};
