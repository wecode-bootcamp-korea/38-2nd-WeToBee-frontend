import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../src/pages/ProductList/Product/Product";
import Login from "./pages/Login/Login";
import Nav from "./components/Nav/Nav";
import Kakaologin from "./pages/Login/Kakaologin";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao/callback" element={<Kakaologin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
