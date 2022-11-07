import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const removeToken = () => localStorage.removeItem("access_token");

const Dropdown = () => {
  return (
    <S.Container>
      <S.Box>
        <StyledLink to="/mypage">
          <S.List>마이페이지</S.List>
        </StyledLink>
        <S.List>
          <S.Button onClick={removeToken}>로그아웃</S.Button>
        </S.List>
      </S.Box>
    </S.Container>
  );
};

export default Dropdown;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const S = {
  Container: styled.div`
    position: absolute;
    top: 65px;
    right: 85px;
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
  Button: styled.button`
    color: #cccccc;
    font-size: 16px;
    background-color: transparent;
    border-style: none;
  `,
};
