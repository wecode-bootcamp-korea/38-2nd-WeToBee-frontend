import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/ProductList/Product/Product";
import ProductPlannerList from "./pages/ProductList/ProductPlannerList";
import Login from "./pages/Login/Login";
import KakaoLogin from "../src/pages/Login/Kakaologin";
import ProductPlannerCreate from "./pages/ProductDetail/ProductPlannerCreate";
import ProductPlannerDetailPage from "./pages/ProductDetail/ProductPlannerDetail";
import PublicLayout from "./PublicRouter";
import Review from "./pages/Review/Review";
import DetailReview from "../src/pages/DetailReview/DetailReview";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Product />} />
          <Route
            path="/product-planner-list"
            element={<ProductPlannerList />}
          />
          <Route
            path="/planner-detail-page/:plannerId"
            element={<ProductPlannerDetailPage />}
          />
          <Route
            path="/planner-detail-page"
            element={<ProductPlannerDetailPage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<Review />} />
        </Route>

        <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />

        <Route
          path="/planner-detail-create"
          element={<ProductPlannerCreate />}
        />
        <Route path="/detailreview" element={<DetailReview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
