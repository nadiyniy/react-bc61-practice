import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { removeToTrash } from "./trashSlice";
import {
  addToFavoriteThunk,
  deleteFromFavorite,
  fetchFavoritesThunk,
} from "./operations";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    deleteBook: (state, { payload }) => {
      const index = state.books.findIndex((book) => book._id === payload);
      state.books.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeToTrash, (state, { payload }) => {
        state.books = state.books.filter((item) => item._id !== payload._id);
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
        state.books = state.books.filter((item) => item._id !== payload._id);
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchFavoritesThunk.pending,
          addToFavoriteThunk.pending,
          deleteFromFavorite.pending
        ),
        (state, { payload }) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchFavoritesThunk.rejected,
          addToFavoriteThunk.rejected,
          deleteFromFavorite.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const { addBook, deleteBook } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
