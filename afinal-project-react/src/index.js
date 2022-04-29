import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
