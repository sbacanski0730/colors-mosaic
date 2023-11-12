import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import worker from "./mocks/browser.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  worker.start();
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
