import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menutab = () => {
  return (
    <div>
      <S.Menubox>
        <S.Menulist>
          <S.Menuname>
            <StyledLink to="/">HOME</StyledLink>
          </S.Menuname>
          <S.Menuname>
            <StyledLink to="/">플래너</StyledLink>
          </S.Menuname>
          <S.Menuname>
            <StyledLink to="/">탐색</StyledLink>
          </S.Menuname>
          <S.Menuname>
            <StyledLink to="/">추천</StyledLink>
          </S.Menuname>
        </S.Menulist>
      </S.Menubox>
    </div>
  );
};

export default Menutab;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const S = {
  Menubox: styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
    border-bottom: 1px solid black;
  `,

  Menulist: styled.ul`
    display: flex;
    justify-content: space-around;
    width: 550px;
    height: 30px;
    margin: 30px;
  `,

  Menuname: styled.li`
    &:hover {
      font-weight: bold;
      border-bottom: 3px solid #ffcc5b;
    }
    cursor: pointer;
    font-family: "Noto Sans", sans-serif;
  `,
};
