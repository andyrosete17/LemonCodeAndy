import React from "react";
import { AppRouter } from "./app-router";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      {/* <h1>Hello React !!</h1> */}
      {/* <nav>
        <a href="/">Page-A</a> ---
        <a href="/page-b">Page-B</a>----
        <a href="/page-c">Page-C</a>
      </nav>
      Hash router */}
      <AppRouter />
    </>
  );
};
