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
    top: 80px;
    right: 180px;
  `,
  Box: styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0dee5;
    background-color: #eeecec;
    border-radius: 10px;
    width: 200px;
    height: 100px;
  `,
  List: styled.li`
    color: #cccccc;
    padding: 10px;
    &:hover {
      font-size: 20px;
      font-weight: bold;
      transition-duration: 0.5s;
      color: black;
    }
  `,
  Button: styled.button`
    color: #cccccc;
    font-size: 16px;
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    &:hover {
      font-size: 20px;
      font-weight: bold;
      transition-duration: 0.5s;
      color: black;
    }
  `,
};
