import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Menutab from "../src/pages/Menutab/Menutab";
import Footer from "../src/components/Footer/Footer";
import Product from "../src/pages/ProductList/Product/Product";
import Login from "./pages/Login/Login";
import KakaoLogin from "../src/pages/Login/Kakaologin";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Menutab />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
