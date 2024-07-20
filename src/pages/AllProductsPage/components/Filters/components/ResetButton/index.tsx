import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  setCalories,
  setPackagingType,
  setPriceRange,
} from "../../../../../../store/features/Filters/FiltersSlice";
import { usePriceRange } from "../../../../../../hooks/usePriceRange";
import { Product } from "../../../../../../types";

type ResetButtonProps = {
  products: Product[];
};

export const ResetButton = ({ products }: ResetButtonProps) => {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = usePriceRange(products);

  const handleReset = () => {
    dispatch(setCalories(0));
    dispatch(setPackagingType([]));
    dispatch(setPriceRange([minPrice, maxPrice]));
  };

  return (
    <Button sx={{ width: "100%" }} onClick={handleReset}>
      Reset
    </Button>
  );
};
