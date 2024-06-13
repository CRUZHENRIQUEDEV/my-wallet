import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"; // Ajuste o caminho conforme necessário
import List from "../pages/Lists"; // Ajuste o caminho conforme necessário

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/list/:type" element={<List />} />
  </Routes>
);

export default AppRoutes;
