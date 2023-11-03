import React, { useEffect, useState } from "react";
import { ItemCard } from "./components/ItemCard";
import { getProducts } from "./servises/api";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./redux/products/actions";
import { selectProducts } from "./redux/products/selector";
import { selectCartProducts } from "./redux/cart/selector";
import CartProduct from "./components/CartProduct";
import { getTotalCart } from "./helpers/getTotalCart";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartProducts = useSelector(selectCartProducts);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => dispatch(addProduct(res.products)));
  }, [dispatch]);

  return (
    <div>
      <header className="bg-teal-500 flex justify-between px-10 py-4 font-bold text-3xl text-white items-center ">
        <div>LOGO</div>
        <button className="border-2 relative border-black text-2xl px-4 py-2 rounded-md">
          Cart{" "}
          <span className="w-8  h-8 text-black z-20 absolute right-[-10px] top-[-10px] rounded-full bg-white flex justify-center items-center">
            {cartProducts.length}
          </span>
        </button>
      </header>
      <main className="px-10 py-8">
        <h1 className="font-bold text-center text-4xl border-b-2 border-black mb-4">
          Product store
        </h1>
        <ul className="grid grid-cols-3 mx-auto list-none p-0 m-0 justify-center gap-4">
          {products.map((product) => {
            return <ItemCard key={product.id} {...product} />;
          })}
        </ul>
        <p>Total amoun:{getTotalCart(cartProducts)}</p>
        <ul className="grid grid-cols-1 justify-center" p>
          {cartProducts.map((product) => {
            return <CartProduct key={product.id} {...product} />;
          })}
        </ul>
      </main>
    </div>
  );
};

export default App;
