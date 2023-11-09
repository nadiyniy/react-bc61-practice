import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = ({ name }) => {
    dispatch(setUser(name));
    reset();
    navigate("/");
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
