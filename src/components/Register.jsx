import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../redux/auth/operation";

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    dispatch(registerThunk(data));
  };

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Enter name"
      />
      <input
        type="text"
        {...register("email", { required: true })}
        placeholder="Enter email"
      />
      <input
        type="text"
        {...register("password", { required: true })}
        placeholder="Enter password"
      />
      <button>Login</button>
    </form>
  );
};
