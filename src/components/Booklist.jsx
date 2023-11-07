import React from "react";
import { selectBooks } from "../redux/bookList/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/FavouritesSlice";
import { toast } from "react-toastify";
import { removeToTrash } from "../redux/trashSlice";
import { useForm } from "react-hook-form";
import { addNewBook } from "../redux/bookList/booksSlice";
import { addToFavoriteThunk } from "../redux/operations";

export const Booklist = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleAddBook = (dataBook) => {
    dispatch(addToFavoriteThunk(dataBook));
    toast.success("You have added book to Favourites successfully");
  };

  const handleRemove = (item) => {
    dispatch(removeToTrash(item));
  };

  const { handleSubmit, register } = useForm();
  const submit = ({ name, author }) => {
    return dispatch(addNewBook({ name, author }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Enter name"
        />
        <input
          {...register("author", { required: true })}
          type="text"
          placeholder="Enter author"
        />
        <button>Add book</button>
      </form>
      <ul>
        {books.map((item) => (
          <li key={item.id}>
            <h2>{item.title} </h2>
            <h4>{item.author}</h4>
            <button onClick={() => handleAddBook(item)}>Add to favorite</button>
            <button onClick={() => handleRemove(item)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
