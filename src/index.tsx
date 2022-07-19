import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./__mock__";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
