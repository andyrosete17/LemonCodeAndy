import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Details } from "./details";
import { List } from "./list";
import { Login } from "./login";

import { PageA } from "./page-a";
import { PageB } from "./page-b";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:login" element={<Details />} />
        {/* <Route path="/" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        <Route path="/page-c" element={<div> Error 404 Not Found</div>} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </HashRouter>
  );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<PageA />} />
  //       <Route path="/page-b" element={<PageB />} />
  //       <Route path="/page-c" element={<div> Error 404 Not Found</div>} />
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
};
