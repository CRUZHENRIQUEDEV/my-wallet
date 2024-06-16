import React from "react";
import { Route, Routes } from "react-router-dom"; // Importa Routes e Route do react-router-dom

// Importa o arquivo correto para SignIn
import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />{" "}
    {/* Usa element em vez de component */}
  </Routes>
);

export default AuthRoutes; // Exporta o componente de rotas para uso em outros lugares
