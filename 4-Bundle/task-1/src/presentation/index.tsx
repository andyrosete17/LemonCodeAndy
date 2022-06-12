import React from "react";
import classes from "./styles.scss";
let logos = require("../content/logo_2.png");

export const PresentationComponent = () => {
  console.log(`entramoss y llamamos a la api con:==>>  ${process.env.EX_API_KEY}`);
  return (
    <div>
      <h1 className={classes.colorFont}>Hola Mundo LemonCode</h1>
      <img src={logos} alt="logoImage" />
    </div>
  );
};
