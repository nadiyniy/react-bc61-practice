import { createSlice, nanoid } from "@reduxjs/toolkit";
import booksData from "../../assets/books.json";
import { removeToTrash } from "../trashSlice";

const prepareAdd = ({ name, author }) => {
  return {
    payload: {
      id: nanoid(),
      title: name,
      author,
    },
  };
};

const initialState = {
  books: booksData,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addNewBook: {
      prepare: prepareAdd,
      reducer: (state, { payload }) => {
        state.books.push(payload);
      },
    },
  },

  extraReducers: (builder) => {
    builder.addCase(removeToTrash, (state, { payload }) => {
      state.books = state.books.filter((item) => item.id !== payload.id);
    });
  },
});

export const bookReducer = bookSlice.reducer;
export const { addNewBook } = bookSlice.actions;
