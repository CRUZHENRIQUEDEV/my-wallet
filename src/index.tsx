import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/themes"; // Certifique-se de que o caminho está correto

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
