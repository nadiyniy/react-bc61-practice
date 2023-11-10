import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../redux/auth/operation";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
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

export default LoginForm;
