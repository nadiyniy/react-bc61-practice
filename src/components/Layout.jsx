import React, { Suspense } from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <NavBar />
      <Suspense fallback={<div>Lodaing...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
