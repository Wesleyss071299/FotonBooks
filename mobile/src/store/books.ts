import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../interfaces/Book";

const initialState = {
  books: [] as Book[],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    fetchBooks(state, action) {
      state.books = action.payload.books;
    },
    reset(state) {
      state.books = [];
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
