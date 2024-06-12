import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"; // Certifique-se de que este caminho está correto
import List from "../pages/Lists"; // Certifique-se de que este caminho está correto

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/list/:type" element={<List />} />
  </Routes>
);

export default AppRoutes;
