import React from "react";
import styled from "styled-components";

const Dropdown = () => {
  return (
    <S.Container>
      <S.Box>
        <S.List>마이페이지</S.List>
        <S.List>로그아웃</S.List>
      </S.Box>
    </S.Container>
  );
};

export default Dropdown;

const S = {
  Container: styled.div`
    position: absolute;
    top: 100px;
    right: 360px;
  `,
  Box: styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 3px solid #ffcc5b;
    padding: 10px;
    background-color: #fff176;
  `,
  List: styled.li`
    color: #cccccc;
    margin-bottom: 10px;
  `,
};
