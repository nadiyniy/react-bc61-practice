import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectFilteredData,
  selectLoading,
} from "../redux/bookList/selectors";
import { toast } from "react-toastify";
import { setFilter } from "../redux/filterSlice";
import { deleteFromFavorite, fetchFavoritesThunk } from "../redux/operations";
import { Loader } from "./loader";

export const Favorite = ({ data = [] }) => {
  const favouritesBooks = useSelector(selectFilteredData);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);

  const handleDeleteBook = (id) => {
    dispatch(deleteFromFavorite(id));
    toast.info("You have deleted book from Favourites");
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
      {loading && <Loader />}
      <ul>
        {favouritesBooks?.map((item) => (
          <li key={item.id}>
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
