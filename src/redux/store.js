import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookList/booksSlice";
import { favouritesReducer } from "./FavouritesSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    favourites: favouritesReducer,
  },
});
