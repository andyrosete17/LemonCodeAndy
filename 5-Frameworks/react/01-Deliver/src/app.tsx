import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContainer as LoginPage } from "./pods/login/";
import { ListContainer as ListPage } from "./pods/list";
import { DetailContainer as DetailPage } from "./pods/detail";
import { MyContextProvider, RouterComponent } from "./core";

export const App = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  );
};
