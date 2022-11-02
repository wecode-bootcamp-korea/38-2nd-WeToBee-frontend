import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/ProductList/Product/Product";
import ProductPlannerList from "./pages/ProductList/ProductPlannerList";
import Nav from "./components/Nav/Nav";
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
        <Route path="/product-planner-list" element={<ProductPlannerList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
