import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logoutThunk } from "../redux/auth/operation";

export const Layout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addPost">Add post</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <button type="button" onClick={() => dispatch(logoutThunk())}>
            LogOut
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
