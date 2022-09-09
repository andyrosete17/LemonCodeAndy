// const numberA: number = 2;
// const numberB: number = 4;

// console.log(numberA + numberB);

// export {}; // para que el ts se considere un modulo debe tener un import o export esto es por la propiedad isolatedModules de tsconfig.json

import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

const root = createRoot(document.getElementById("root"));
root.render(<HelloComponent />);
