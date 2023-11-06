import React from "react";
import books from "./assets/books.json";
import { Booklist } from "./components/Booklist";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./components/Favorite";
import { Header } from "./components/Header";

// Plan
// Додати редакс в проект. Створити слайс книжок, відмалювати дані, створити стор - Mariia
// Додати слайс улюблених. Додати можливість видалення / додавання в стор - Kyrylo
// Додати пошук по улюбленим
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
      </Routes>
    </div>
  );
};

export default App;
