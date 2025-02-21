import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountProvider } from "./context/CountContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CountProvider>
        <App />
    </CountProvider>
);
