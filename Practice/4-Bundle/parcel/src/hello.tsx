import React from "react";
import * as classes from "./hello.style.scss";

export const HelloComponent: React.FC = () => {
  return <h1 className={classes.myBackground}>Hello from reacts</h1>;
};
