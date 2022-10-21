import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="flex md:justify-center md:h-screen">
      <App />
    </main>
  </React.StrictMode>
);
