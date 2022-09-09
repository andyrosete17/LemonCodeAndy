import { ByeComponent } from "./bye";
import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

const root = createRoot(document.getElementById("root"));
let car:number = 4;
class andy {

}
root.render(
  <div>
    <HelloComponent />
    <ByeComponent />
  </div>
);
