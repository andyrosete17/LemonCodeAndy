import React from "react";
import { MyContext } from "./demo";

export const AnotherComponent = () => {
  const { username, setUsername } = React.useContext(MyContext);

  React.useEffect(() => {
    setUsername("JOJOJOJO");
  }, []);

  return (
    <>
      <p>username: {username}</p>
    </>
  );
};
