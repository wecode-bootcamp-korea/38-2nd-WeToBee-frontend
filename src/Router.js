import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/ProductList/Product/Product";
import ProductPlannerList from "./pages/ProductList/ProductPlannerList";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import KakaoLogin from "../src/pages/Login/Kakaologin";
import ProductPlannerDetail from "./pages/ProductDetail/ProductPlannerCreate";
import ProductPlannerDetailPage from "./pages/ProductDetail/ProductPlannerDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/product-planner-list" element={<ProductPlannerList />} />
        <Route
          path="/planner-detail-create"
          element={<ProductPlannerDetail />}
        />
        <Route
          path="/planner-detail-page"
          element={<ProductPlannerDetailPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
