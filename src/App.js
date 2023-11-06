import React from "react";
import books from "./assets/books.json";
import { Booklist } from "./components/Booklist";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./components/Favorite";
import { Header } from "./components/Header";
import Trash from "./page/Trash";

// Plan
// Додати редакс в проект. Створити слайс книжок, відмалювати дані, створити стор - Mariia
// Додати слайс улюблених. Додати можливість видалення / додавання в стор - Kyrylo
// Додати пошук по улюбленим
// ======================
//додавання книги, перевірка на пусті поля
//переписати на реакт хук форм
// Додати персіст

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route
          path="/favorite"
          element={<Favorite data={books.slice(0, 3)} />}
        />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
};

export default App;
