import React from "react";
import KakaoMap from "./KakaoMap";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const ProductPlannerCreate = () => {
  return (
    <S.CreatePlanner>
      <KakaoMap />
    </S.CreatePlanner>
  );
};
const S = {
  CreatePlanner: styled.div`
    display: flex;
    justify-content: center;
    background: rgb(245, 245, 245);
  `,
};

export default ProductPlannerCreate;
