import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = ({ name }) => {
    dispatch(setUser(name));
    reset();
  };

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Enter username"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
