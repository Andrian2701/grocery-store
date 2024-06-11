import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalContent: null,
};

const ModalWindowSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = ModalWindowSlice.actions;

export default ModalWindowSlice.reducer;
