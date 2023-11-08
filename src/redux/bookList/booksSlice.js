import { createSlice, nanoid } from "@reduxjs/toolkit";
import booksData from "../../assets/books.json";
import { removeToTrash } from "../trashSlice";
import { addBookToArchive } from "../operations";

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
    builder.addCase(addBookToArchive.fulfilled, (state, { payload }) => {
      state.books = state.books.filter((item) => {
        console.log(item.id);
        return item._id !== payload._id;
      });
    });
  },
});

export const bookReducer = bookSlice.reducer;
export const { addNewBook } = bookSlice.actions;
