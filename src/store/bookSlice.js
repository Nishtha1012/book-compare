import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareBooks: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToCompare(state, action) {
      state.compareBooks = [...state.compareBooks, action.payload];
    },
  },
});

export const { addToCompare } = bookSlice.actions;

export default bookSlice.reducer;
