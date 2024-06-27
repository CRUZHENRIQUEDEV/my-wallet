import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes/app.routes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "./hooks/theme";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </StyledThemeProvider>
  );
};

export default App;
