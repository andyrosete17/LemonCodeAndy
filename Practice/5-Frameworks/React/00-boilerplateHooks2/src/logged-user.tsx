import React from "react";
import { MyContext } from "./my-provider";

export const LoggedUser = () => {
  const {username} = React.useContext(MyContext);
  return (
    <>
      <h1>User: {username}</h1>
    </>
  );
};
