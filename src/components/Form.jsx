import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPostThunk } from "../redux/posts/operations";
import moment from "moment/moment";
import { selectUser } from "../redux/user/selector";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const submit = (data) => {
    dispatch(addPostThunk({ ...data, createdAt: moment(), owner: name }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Enter title of post"
      />
      <textarea
        {...register("body", { required: true })}
        placeholder="Enter description"
      ></textarea>
      <button>Add post</button>
    </form>
  );
};

export default Form;
