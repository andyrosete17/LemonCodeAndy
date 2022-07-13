import React, { useState } from "react";
import { createContext } from "react";

interface IContext {
  company: string;
  setCompany: (value: string) => void;
}

export const MyContext = createContext<IContext>({
  company: "Lemoncode",
  setCompany: (value: string) => {
    console.log(
      "You have forgotten to add the provider in your component hierarchy"
    );
  },
});

export const MyContextProvider = (props: any) => {
  const { children } = props;
  const [company, setCompany] = useState("LemonCode");
  return (
    <MyContext.Provider value={{ company, setCompany }}>
      {children}
    </MyContext.Provider>
  );
};
