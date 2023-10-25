import React from "react";
import { fetchProducts } from "./servises/apiJs";
//plan
// https://dummyjson.com/products - api
//https://dummyjson.com/products/search?q=phone - search api

// 1. Створити апі і зробити запит за продуктами - [] - Mariia
// 2. Додати верстку для відображення продуктів -
// 3. Зробити підгрузку
// 4. Додати пошук
// 5. Вивести в модальне вікно зображення
// * Додати лоадери, нотіфікації

class App extends React.Component {
  async componentDidMount() {
    try {
      const { products } = await fetchProducts();
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return <div></div>;
  }
}
export default App;
