import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./__mock__";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
