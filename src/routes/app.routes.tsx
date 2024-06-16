import React from "react"; // Importa o React
import { Routes, Route } from "react-router-dom"; // Importa os componentes de rotas do react-router-dom
import Dashboard from "../pages/Dashboard"; // Importa o componente Dashboard (ajuste o caminho conforme necessário)
import List from "../pages/Lists"; // Importa o componente List (ajuste o caminho conforme necessário)

// Define o componente de rotas da aplicação
const AppRoutes: React.FC = () => (
  <Routes>
    {" "}
    {/* Componente que encapsula todas as rotas da aplicação */}
    <Route path="/dashboard" element={<Dashboard />} />{" "}
    {/* Define a rota para o Dashboard */}
    <Route path="/list/:type" element={<List />} />{" "}
    {/* Define a rota para a lista, que aceita um parâmetro de URL */}
  </Routes>
);

export default AppRoutes; // Exporta o componente de rotas para uso em outros lugares
