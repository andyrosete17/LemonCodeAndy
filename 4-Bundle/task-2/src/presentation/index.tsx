import React from "react";
import classes from "./styles.scss";

// let logos = require("../content/logo_2.png");
import logo from "../content/logo_2.png";

import { API_KEY } from "../../config";

export const PresentationComponent = () => {
  console.log("primero vemos el env", API_KEY);

  console.log(`process.env`, process.env);
  return (
    <div>
      {/* <h1>aqui dice {process.env.REACT_APP_API_KEY}</h1> */}
      <h1 className={classes.colorFont}>Hola Mundo LemonCode</h1>
      <img src={logo} alt="logoImage" />
    </div>
  );
};
