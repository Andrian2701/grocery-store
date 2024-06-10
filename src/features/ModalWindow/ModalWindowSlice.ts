import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  content: null,
};

const ModalWindowSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.openModal = true;
      state.content = action.payload;
    },
    closeModal: (state) => {
      state.openModal = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = ModalWindowSlice.actions;

export default ModalWindowSlice.reducer;
