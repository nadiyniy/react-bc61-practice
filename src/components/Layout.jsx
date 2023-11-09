import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addPost">Add post</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
