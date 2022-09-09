import React, { useRef, useState } from "react";

export const Demo = () => {
  const [value, setValue] = useState("");
  let count = useRef(0); // use ref no provoca re render es como un useState pero sin renderizar nada
  console.log("Render count", count.current);
  count.current++;

  const divElement = useRef<HTMLDivElement>();

  const handleClick = () => {
    console.log(divElement.current.clientWidth);
  };
  return (
    <div ref={divElement} style={{ border: "2px solid black" }}>
      <button onClick={handleClick}>Increment</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
