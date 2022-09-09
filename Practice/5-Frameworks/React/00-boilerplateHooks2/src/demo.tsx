import React from "react";
import { EditUser } from "./edit-user";
import { LoggedUser } from "./logged-user";
import { MyProvider } from "./my-provider";

export const Demo = () => {
  return (
    <MyProvider initialUsername='Andy'>
      <LoggedUser />
      <EditUser />
    </MyProvider>
  );
};
