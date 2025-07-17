import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import './Styles/main.scss';
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/"  element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
