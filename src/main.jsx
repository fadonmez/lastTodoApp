import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { DataProvider } from "../context/data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </NextUIProvider>
  </React.StrictMode>
);
