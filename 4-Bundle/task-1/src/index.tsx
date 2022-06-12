import React from "react";
import { createRoot } from "react-dom/client";
import { PresentationComponent } from "./presentation/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<PresentationComponent />);
