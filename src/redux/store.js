import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookList/booksSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
