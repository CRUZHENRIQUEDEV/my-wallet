// src/routes/index.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import List from "../pages/Lists/index";
import SignIn from "../pages/SignIn";
import MoneyExchange from "../pages/MoneyExchange";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/list/:type" element={<List />} />
    <Route path="/money-exchange" element={<MoneyExchange />} />
    <Route path="/" element={<SignIn />} />
  </Routes>
);

export default AppRoutes;
