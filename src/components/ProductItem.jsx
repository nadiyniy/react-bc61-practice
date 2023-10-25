import React from "react";

export const ProductItem = ({ product }) => {
  const { title, thumbnail, description, id, price } = product;
  return (
    <li>
      <img src={thumbnail} alt="pro img" />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </li>
  );
};
