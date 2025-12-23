import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Stairs from "./components/common/Stairs";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Stairs />
    <App />
  </BrowserRouter>
);
