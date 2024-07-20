import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FiltersState } from "../../../types";

const initialState: FiltersState = {
  calories: 0,
  packagingType: [] as string[],
  priceRange: [0, 0],
};

export const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCalories: (state, action: PayloadAction<number>) => {
      state.calories = action.payload;
    },
    setPackagingType: (state, action: PayloadAction<string[]>) => {
      state.packagingType = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setCalories, setPackagingType, setPriceRange } =
  FiltersSlice.actions;

export default FiltersSlice.reducer;
