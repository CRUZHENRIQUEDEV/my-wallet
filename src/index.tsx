import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./hooks/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { useTheme } from "./hooks/theme";

const Root: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </StyledThemeProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider>
    <Router>
      <Root />
    </Router>
  </ThemeProvider>
);
