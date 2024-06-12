import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import AppRoutes from "./routes/app.routes";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/themes";

const App: React.FC = () => {
  const { theme } = useTheme(); // Usando o hook para obter o tema atual

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
