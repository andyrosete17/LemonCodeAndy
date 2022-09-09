import React from "react";
import { AppRouter } from "./app-router";
import { PageA } from "./page-a";

export const App = () => {
  return (
    <>
      <h1>Hello React !!</h1>
      <nav>
        <a href="/">Page-A</a> --
        <a href="/page-b">Page-B</a>
      </nav>
      <AppRouter />
    </>
  );
};
