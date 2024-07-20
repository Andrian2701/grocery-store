import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiltersState, Product } from "../types";

export const useFilterProducts = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );
  const filters = useSelector(
    (state: { filters: FiltersState }) => state.filters
  );

  const filterByCalories = (item: Product) => {
    switch (filters.calories) {
      case 100:
        return item.calories <= 100;
      case 400:
        return item.calories >= 100 && item.calories <= 400;
      case 450:
        return item.calories >= 450;
      default:
        return true;
    }
  };

  useEffect(() => {
    if (!products) return;

    const filteredItems = products.filter((item: Product) => {
      const packagingMatch = filters.packagingType.length
        ? filters.packagingType.includes(item.packagingType)
        : true;
      const caloriesMatch = filters.calories !== null && filterByCalories(item);
      const priceRangeMatch =
        filters.priceRange[0] <= item.price &&
        filters.priceRange[1] >= item.price;

      return packagingMatch && caloriesMatch && priceRangeMatch;
    });

    setFilteredProducts(filteredItems.length ? filteredItems : []);
  }, [filters.packagingType, filters.calories, filters.priceRange]);

  return filteredProducts;
};
