import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MainProvider } from "./reducer/context";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainProvider>
        <App />
      </MainProvider>
    </Router>
  </React.StrictMode>
);
