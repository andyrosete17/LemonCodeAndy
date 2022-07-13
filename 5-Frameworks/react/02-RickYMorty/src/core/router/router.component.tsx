import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginPage, ListPage, DetailPage } from "@/scenes";
import { MyContextProvider } from "../context/context";

export const RouterComponent: FC = () => {
  return (
      <Router>
        <Routes>
          <Route path={switchRoutes.root} element={<LoginPage />} />
          <Route path={switchRoutes.list} element={<ListPage />} />
          <Route path={switchRoutes.details} element={<DetailPage />} />
        </Routes>
      </Router>
  );
};
