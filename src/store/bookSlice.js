import { createSlice } from "@reduxjs/toolkit";
import { uniq } from "lodash";

const initialState = {
  compareBooks: [],
};

/** Book slice and actions*/

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    /** action to add book id to compare */
    addToCompare(state, action) {
      state.compareBooks = uniq([...state.compareBooks, action.payload]);
    },

    /** action to remove book id from compare */
    removeFromCompare(state, action) {
      let items = state.compareBooks.filter((item) => item !== action.payload);
      state.compareBooks = items;
    },
  },
});

/** exporting actions */
export const { addToCompare, removeFromCompare } = bookSlice.actions;

/** exporting reducer */
export default bookSlice.reducer;
