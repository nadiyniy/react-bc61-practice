import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookList/booksSlice";
import { favouritesReducer } from "./FavouritesSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    favourites: favouritesReducer,
    filter: filterReducer,
  },
});
