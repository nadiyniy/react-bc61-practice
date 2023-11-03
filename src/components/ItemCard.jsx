import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cart/actions";

export const ItemCard = ({ id, title, price, thumbnail, description }) => {
  const dispatch = useDispatch();

  return (
    <li className="border-2 border-black shadow-md px-4 py-6 rounded-md grid gap-4 ">
      <img className="aspect-video object-cover" src={thumbnail} alt={title} />
      <div>
        <p>{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <span>{price}$</span>
        <button
          onClick={() =>
            dispatch(
              addProduct({ id, title, price, thumbnail, description, qty: 1 })
            )
          }
          className="px-4 py-2 border-2 border-black rounded-md "
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};
