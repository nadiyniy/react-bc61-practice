import React from "react";
import { selectBooks } from "../redux/bookList/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/FavouritesSlice";
import { toast } from "react-toastify";

export const Booklist = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleAddBook = (dataBook) => {
    dispatch(addBook(dataBook));
    toast.success("You have added book to Favourites successfully");
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Enter author" />
        <button>Add book</button>
      </form>
      <ul>
        {books.map((item) => (
          <li>
            <h2>{item.title} </h2>
            <h4>{item.author}</h4>
            <button onClick={() => handleAddBook(item)}>Add to favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
