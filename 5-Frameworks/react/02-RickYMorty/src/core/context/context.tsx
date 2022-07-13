import React, { useState } from "react";
import { createContext } from "react";

interface IContext {
  character: string;
  setCharacter: (value: string) => void;
  navigationPage: number;
  setNavigationPage: (value: number) => void;
}

export const MyContext = createContext<IContext>({
  character: "",
  setCharacter: (value: string) => {
    console.log(
      "You have forgotten to add the provider in your component hierarchy"
    );
  },
  navigationPage: 1,
  setNavigationPage: (value: number) => {
    console.log(
      "You have forgotten to add the provider in your component hierarchy"
    );
  },
});

export const MyContextProvider = (props: any) => {
  const { children } = props;
  const [character, setCharacter] = useState("");
  const [navigationPage, setNavigationPage] = useState(1);
  return (
    <MyContext.Provider
      value={{ character, setCharacter, navigationPage, setNavigationPage }}
    >
      {children}
    </MyContext.Provider>
  );
};
