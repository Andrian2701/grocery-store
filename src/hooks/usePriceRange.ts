import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPriceRange } from "../store/features/Filters/FiltersSlice";
import { Product } from "../types";

export const usePriceRange = (products: Product[]) => {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (products?.length) {
      const newMinPrice = Math.min(...products.map((item) => item.price));
      const newMaxPrice = Math.max(...products.map((item) => item.price));
      dispatch(setPriceRange([newMinPrice, newMaxPrice]));
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
    }
  }, [products, dispatch]);

  return { minPrice, maxPrice };
};
