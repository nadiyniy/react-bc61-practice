import { createSlice } from "@reduxjs/toolkit";
import { removeToTrash } from "./trashSlice";
import {
  addToFavoriteThunk,
  deleteFromFavorite,
  fetchFavoritesThunk,
} from "./operations";

const initialState = {
  books: [],
  loading: false,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    deleteBook: (state, { payload }) => {
      const index = state.books.findIndex((book) => book.id === payload);
      state.books.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeToTrash, (state, { payload }) => {
        state.books = state.books.filter((item) => item.id !== payload.id);
      })
      .addCase(fetchFavoritesThunk.fulfilled, (state, { payload }) => {
        state.books = payload;
        state.loading = false;
      })
      .addCase(addToFavoriteThunk.fulfilled, (state, { payload }) => {
        state.books.push(payload);
        state.loading = false;
      })
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.books = state.books.filter((item) => item.id !== payload.id);
        state.loading = false;
      });
  },
});

export const { addBook, deleteBook } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
