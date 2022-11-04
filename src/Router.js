import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/ProductList/Product/Product";
import Nav from "./components/Nav/Nav";
import Login from "./pages/Login/Login";
import KakaoLogin from "./pages/Login/Kakaologin";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
