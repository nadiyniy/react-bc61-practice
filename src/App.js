import React from "react";
import { fetchProducts } from "./servises/apiJs";
import { ProductItem } from "./components/ProductItem";
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
  state = {
    loading: false,
    products: [],
    error: null,
    query: "",
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { products } = await fetchProducts();
      this.setState({ products });
      console.log(products);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Product list</h1>
        <ul>
          {products.map((item) => (
            <ProductItem product={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
