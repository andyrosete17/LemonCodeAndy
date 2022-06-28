import React from "react";
import classes from "./styles.scss";

import logo from "../content/logo_2.png";

export const PresentationComponent = () => {
  console.log("The API key for the env selected is", process.env.API_KEY);

  console.log(`process.env`, process.env.NODE_ENV);
  return (
    <div>
      <h1>aqui dice {process.env.API_KEY}</h1>
      <h1 className={classes.colorFont}>Hello World LemonCode</h1>
      <img src={logo} alt="logoImage" />
    </div>
  );
};
