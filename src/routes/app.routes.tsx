import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import List from "../pages/Lists";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/list" element={<List />} />
  </Routes>
);

export default AppRoutes;
