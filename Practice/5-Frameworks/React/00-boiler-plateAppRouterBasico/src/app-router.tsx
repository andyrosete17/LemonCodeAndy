import React from "react";
import { PageA } from "./page-a";
import { PageB } from "./page-b";

export const AppRouter = () => {
  const pathname = window.location.pathname;
  console.log(pathname);
  return pathname === "/" ? (
    <PageA />
  ) : pathname === "/page-b" ? (
    <PageB />
  ) : (
    <>Page not found</>
  );
};
