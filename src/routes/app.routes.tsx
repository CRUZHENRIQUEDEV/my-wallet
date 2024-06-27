import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import List from "../pages/Lists";
import SignIn from "../pages/SignIn";
import MoneyExchange from "../pages/MoneyExchange";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route
      path="/dashboard"
      element={
        <Layout>
          <Dashboard />
        </Layout>
      }
    />
    <Route
      path="/list/:type"
      element={
        <Layout>
          <List />
        </Layout>
      }
    />
    <Route
      path="/money-exchange"
      element={
        <Layout>
          <MoneyExchange />
        </Layout>
      }
    />
  </Routes>
);

export default AppRoutes;
