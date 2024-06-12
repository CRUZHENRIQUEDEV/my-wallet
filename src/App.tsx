import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import darkTheme from "./styles/themes/dark";
import lightTheme from "./styles/themes/light";
import Dashboard from "./pages/Dashboard";
import List from "./pages/Lists";
import HistoryFinanceCard from "./components/HistoryFinanceCard";

const App: React.FC = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
