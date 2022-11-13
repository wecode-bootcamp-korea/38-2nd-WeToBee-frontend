import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Nav = ({ setIsLoginToken, isLoginToken }) => {
  // useEffect(() => {
  //   setIsLoginToken(!localStorage.getItem("accessToken") ? true : false);
  // });

  const [isView, setIsView] = useState(false);
  return (
    <div>
      <S.NavMenu>
        <S.NavContainer>
          <S.NavBox>
            <S.NavLeft>
              <S.LeftTop>셀프 한국여행, 시간/비용 줄여주는</S.LeftTop>
              <S.LeftBottom>스투피 셀프팩</S.LeftBottom>
            </S.NavLeft>
            <S.ImgBox>
              <Link to="/">
                <S.ImgBee src="/images/wetobee.png" alt="wetobee" />
              </Link>
            </S.ImgBox>
            <S.NavRight>
              <S.Reservation>내역</S.Reservation>
              {true ? (
                <S.Profile
                  src="/images/profile 2.png"
                  alt="profile"
                  onClick={() => {
                    setIsView(!isView);
                  }}
                />
              ) : (
                <StyledLink to="/login">
                  <S.Login>로그인</S.Login>
                </StyledLink>
              )}
              {isView && <Dropdown />}
            </S.NavRight>
          </S.NavBox>
        </S.NavContainer>
      </S.NavMenu>
    </div>
  );
};

export default Nav;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const S = {
  NavMenu: styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #7c683c;
  `,

  NavContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  `,

  NavBox: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  `,

  NavLeft: styled.div`
    width: 250px;
  `,

  LeftTop: styled.p`
    font-size: 18px;
    color: #ee685a;
  `,

  LeftBottom: styled.p`
    margin-top: 15px;
    font-size: 18px;
    color: #4a4a4a;
  `,

  ImgBox: styled.div`
    display: flex;
    width: 255px;
    height: 100px;
  `,

  ImgBee: styled.img`
    width: 150px;
  `,

  NavRight: styled.div`
    display: flex;
    margin-top: 10px;
    color: #cccccc;
  `,

  Reservation: styled.a`
    margin-right: 20px;
    font-size: 18px;
    cursor: pointer;
  `,

  Login: styled.a`
    display: flex;
    cursor: pointer;
    color: #cccccc;
  `,

  Profile: styled.img`
    width: 28px;
    height: 28px;
    margin-left: 20px;
    border: 1px solid #86858c;
    border-radius: 50%;
  `,
};
