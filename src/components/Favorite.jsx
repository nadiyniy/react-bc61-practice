import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavouritesBooks } from "../redux/bookList/selectors";
import { deleteBook } from "../redux/FavouritesSlice";
import { toast } from "react-toastify";

export const Favorite = ({ data = [] }) => {
  const favouritesBooks = useSelector(selectFavouritesBooks);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
    toast.info("You have deleted book from Favourites");
  };

  return (
    <div>
      <h2>Favorite</h2>
      <input type="text" placeholder="Search by title" />
      <ul>
        {favouritesBooks.map((item) => (
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
