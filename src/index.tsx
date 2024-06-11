import React from "react"; // import React from "react";
import ReactDOM from "react-dom/client"; // import ReactDOM from "react-dom";
import "./index.css"; // import "./index.css";
import Dashboard from "./pages/SingIn"; // import Dashboard from "./pages/Dashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
