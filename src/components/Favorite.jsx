import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavouritesBooks,
  selectFilter,
} from "../redux/bookList/selectors";
import { deleteBook } from "../redux/FavouritesSlice";
import { toast } from "react-toastify";
import { setFilter } from "../redux/filterSlice";
import { deleteFromFavorite, fetchFavoritesThunk } from "../redux/operations";

export const Favorite = ({ data = [] }) => {
  const favouritesBooks = useSelector(selectFavouritesBooks);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleDeleteBook = (id) => {
    dispatch(deleteFromFavorite(id));
    toast.info("You have deleted book from Favourites");
  };
  const getFilteredData = () => {
    return favouritesBooks.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  useEffect(() => {
    dispatch(fetchFavoritesThunk());
  }, [dispatch]);
  return (
    <div>
      <h2>Favorite</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
        placeholder="Search by title"
      />
      <ul>
        {getFilteredData()?.map((item) => (
          <li>
            <h2>{item.title} </h2>
            <h4>{item.author}</h4>
            <button onClick={() => handleDeleteBook(item.id)}>
              Delete from favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
