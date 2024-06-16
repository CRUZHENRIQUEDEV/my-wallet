import React from "react"; // Importa a biblioteca React
import GlobalStyles from "./styles/GlobalStyles"; // Importa os estilos globais
import Layout from "./components/Layout"; // Importa o componente Layout
import AppRoutes from "./routes/app.routes"; // Importa as rotas da aplicação

import { ThemeProvider } from "styled-components"; // Importa o ThemeProvider do styled-components
import { useTheme } from "./hooks/theme"; // Importa o hook useTheme personalizado

const App: React.FC = () => {
  const { theme } = useTheme(); // Usa o hook useTheme para obter o tema atual

  return (
    // Envolve a aplicação no ThemeProvider para fornecer o tema a todos os componentes
    <ThemeProvider theme={theme}>
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <Layout>
        <AppRoutes /> {/* Renderiza as rotas da aplicação dentro do layout */}
      </Layout>
    </ThemeProvider>
  );
};

export default App; // Exporta o componente App como padrão
