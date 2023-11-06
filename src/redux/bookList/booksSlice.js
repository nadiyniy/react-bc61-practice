import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../assets/books.json";

const initialState = {
  books: booksData,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const bookReducer = bookSlice.reducer;
// export const bookReducer =
