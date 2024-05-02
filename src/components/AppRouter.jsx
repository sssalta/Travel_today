import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesApp } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {routesApp?.map((route, ind) => (
        <Route key={ind} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
