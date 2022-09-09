import React, { useId } from "react";
import { MembersTable } from "./members-table";

export const App = () => {
  return (
    <>
      <MembersTable org="lemoncode" />
      <MembersTable org="apple" />;
    </>
  );
};
