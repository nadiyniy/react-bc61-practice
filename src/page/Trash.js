import React from "react";
import { useSelector } from "react-redux";
import { selectTrash } from "../redux/selectors";

const Trash = () => {
  const trashList = useSelector(selectTrash);

  return (
    <ul>
      {trashList.map((item) => (
        <li key={item.id}>
          {item.title} <span>{item.deletedAt}</span>
        </li>
      ))}
    </ul>
  );
};

export default Trash;
