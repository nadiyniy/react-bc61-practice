import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrash } from "../redux/selectors";
import { deleteOneBookFromArchive, fetchArchive } from "../redux/operations";

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
          <button onClick={() => dispatch(deleteOneBookFromArchive(item.id))}>
            Delete from archive
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Trash;
