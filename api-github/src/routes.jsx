import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage";

export const AppRoutes = () => (
    <Routes>
      <Route path="/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
