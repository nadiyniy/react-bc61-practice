import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrash } from "../redux/selectors";
import { fetchArchive } from "../redux/operations";

const Trash = () => {
  const trashList = useSelector(selectTrash);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArchive());
  }, [dispatch]);

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
