import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Nav = ({ setIsLoginToken, isLoginToken }) => {
  useEffect(() => {
    setIsLoginToken(!localStorage.getItem("accessToken") ? true : false);
  });

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
              <S.ImgBee src="/images/wetobee.png" alt="wetobee" />
            </S.ImgBox>
            <S.NavRight>
              <S.Reservation>내역</S.Reservation>
              <StyledLink to="/login">
                {isLoginToken === true ? (
                  <S.Login>로그인</S.Login>
                ) : (
                  <S.Profile
                    src="/images/profile 2.png"
                    alt="profile"
                    onClick={() => {
                      setIsView(!isView);
                    }}
                  />
                )}
                {isView && <Dropdown />}
              </StyledLink>
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
    border-bottom: 3px solid #7c683c;
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
    width: 300px;
  `,

  LeftTop: styled.p`
    font-size: 20px;
    color: #ee685a;
  `,

  LeftBottom: styled.p`
    margin-top: 15px;
    font-size: 30px;
    color: #4a4a4a;
  `,

  ImgBox: styled.div`
    display: flex;
    width: 325px;
  `,

  ImgBee: styled.img`
    width: 250px;
  `,

  NavRight: styled.div`
    display: flex;
    margin-top: 10px;
    width: 325px;
    color: #cccccc;
  `,

  Reservation: styled.a`
    margin-right: 20px;
    font-size: 25px;
    cursor: pointer;
  `,

  Login: styled.a`
    display: flex;
    font-size: 25px;
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
