import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPostThunk } from "../redux/posts/operations";
import moment from "moment/moment";
import { selectUser } from "../redux/user/selector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      await dispatch(
        addPostThunk({ ...data, createdAt: moment(), owner: name })
      ).unwrap();
      navigate("/");
    } catch (error) {
      toast.error("Server is dead");
    }
    // dispatch(addPostThunk({ ...data, createdAt: moment(), owner: name }))
    //   .unwrap()
    //   .then(() => navigate("/"))
    //   .catch(() => toast.error("Server is dead"));
    // navigate("/");
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
