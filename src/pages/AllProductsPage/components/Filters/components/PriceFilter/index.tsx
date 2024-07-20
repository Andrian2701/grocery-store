import {
  Box,
  InputAdornment,
  OutlinedInput,
  Slider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FiltersState, Product } from "../../../../../../types";
import { setPriceRange } from "../../../../../../store/features/Filters/FiltersSlice";
import { usePriceRange } from "../../../../../../hooks/usePriceRange";

type PriceFilterProps = {
  products: Product[];
};

export const PriceFilter = ({ products }: PriceFilterProps) => {
  const dispatch = useDispatch();
  const priceRange = useSelector(
    (state: { filters: FiltersState }) => state.filters.priceRange
  );
  usePriceRange(products);

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <Box display="flex" gap="1.5rem">
        <Box display="flex" flexDirection="column" gap="1rem" width="100%">
          <Typography variant="h2" fontSize="0.8rem !important">
            From
          </Typography>
          <OutlinedInput
            value={priceRange[0]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setPriceRange([Number(e.target.value), priceRange[1]]))
            }
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem" width="100%">
          <Typography variant="h2" fontSize="0.8rem !important">
            To
          </Typography>
          <OutlinedInput
            value={priceRange[1]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setPriceRange([priceRange[0], Number(e.target.value)]))
            }
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Box>
      </Box>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRange}
        onChange={(e: Event, newValue: number | number[]) =>
          dispatch(setPriceRange(newValue as [number, number]))
        }
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
