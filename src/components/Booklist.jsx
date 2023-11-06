import React from "react";
import { selectBooks } from "../redux/bookList/selectors";
import { useSelector } from "react-redux";

export const Booklist = () => {
  const books = useSelector(selectBooks);

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
            <button>Add to favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
