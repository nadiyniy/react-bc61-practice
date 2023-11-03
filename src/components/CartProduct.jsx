import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cart/actions";

const CartProduct = ({ id, title, price, thumbnail, qty }) => {
  const dispatch = useDispatch();
  return (
    <li className="border-2 border-black shadow-md px-4 py-6 rounded-md grid gap-4 ">
      <img
        className="aspect-video object-cover w-20"
        src={thumbnail}
        alt={title}
      />
      <div>
        <p>{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <span>{price}$</span>
        <div>
          <button>-</button>
          <span>{qty}</span>
          <button
            onClick={() => dispatch({ type: "increaseCartItem", payload: id })}
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(deleteProduct(id))}
          className="px-4 py-2 border-2 border-black rounded-md "
        >
          Delete from cart
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
