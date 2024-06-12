import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/themes";
import GlobalStyles from "./styles/GlobalStyles";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
