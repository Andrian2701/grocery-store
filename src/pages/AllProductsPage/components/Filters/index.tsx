import { Box, Divider, List, Typography } from "@mui/material";
import {
  CalorieFilter,
  PackagingFilter,
  PriceFilter,
  ResetButton,
} from "./components";
import { Product } from "../../../../types";

type FiltersProps = {
  matches: boolean;
  products: Product[];
};

export const Filters = ({ matches, products }: FiltersProps) => {
  return (
    <Box
      width={!matches ? "16.5rem" : "100%"}
      display="flex"
      flexDirection="column"
      flexShrink={0}
      gap="1.5rem"
    >
      <Divider />
      <Box display="flex" flexDirection="column" gap="1.5rem">
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="auto"
          gap="10px"
        >
          <CalorieFilter title="(0-100)Kcal" filterParam={100} />
          <CalorieFilter title="(100-400)Kcal" filterParam={400} />
          <CalorieFilter
            title="(400+)Kcal"
            filterParam={450}
            style={{ gridColumn: "span 2", width: "auto" }}
          />
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1.5rem">
          <Typography variant="h2" fontSize="1.2rem !important">
            Packaging
          </Typography>
          <List
            disablePadding
            sx={{
              width: "100%",
            }}
          >
            <PackagingFilter />
          </List>
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap="1.5rem">
          <Typography variant="h2" fontSize="1.2rem !important">
            Price
          </Typography>
          <PriceFilter products={products} />
        </Box>
        <ResetButton products={products} />
      </Box>
    </Box>
  );
};
