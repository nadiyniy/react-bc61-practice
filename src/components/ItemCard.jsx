import React from "react";

export const ItemCard = ({ id, title, price, thumbnail, description }) => {
  return (
    <li className="border-2 border-black shadow-md px-4 py-6 rounded-md grid gap-4 ">
      <img className="aspect-video object-cover" src={thumbnail} alt={title} />
      <div>
        <p>{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <span>{price}$</span>
        <button className="px-4 py-2 border-2 border-black rounded-md ">
          Add to cart
        </button>
      </div>
    </li>
  );
};
