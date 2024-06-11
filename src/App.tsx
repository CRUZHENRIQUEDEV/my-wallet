import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import darkTheme from "./styles/themes/dark";
import lightTheme from "./styles/themes/light";

const App: React.FC = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          Your Content Here
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
