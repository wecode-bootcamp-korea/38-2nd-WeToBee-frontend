import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <S.FooterBox>
      <div>
        <S.Top>
          <S.Toplist>광고/제휴문의</S.Toplist>
          <S.Toplist>서비스문의</S.Toplist>
          <S.Toplist>개인정보 취급방침</S.Toplist>
          <S.Toplist>이용약관</S.Toplist>
          <S.Toplist>여행자약관</S.Toplist>
          <S.Toplist>가이드약관</S.Toplist>
        </S.Top>
      </div>
      <S.Container>
        <S.BottomTitle>
          <S.Left>WeToBee</S.Left>
          <div>
            <S.Icons>
              <S.Iconslist>
                <a href="https://www.facebook.com">
                  <FaFacebook className="icons" color="#77777F" size="42" />
                </a>
              </S.Iconslist>
              <S.Iconslist>
                <a href="https://www.instagram.com">
                  <FaInstagram className="icons" color="#77777F" size="42" />
                </a>
              </S.Iconslist>
              <S.Iconslist>
                <a href="https://www.kakaocorp.com">
                  <RiKakaoTalkFill
                    className="icons"
                    color="#77777F"
                    size="45"
                  />
                </a>
              </S.Iconslist>
              <S.Iconslist>
                <a href="https://www.google.com/intl/ko/gmail/about/">
                  <AiFillMail className="icons" color="#77777F" size="42" />
                </a>
              </S.Iconslist>
            </S.Icons>
          </div>
        </S.BottomTitle>
        <S.Bottomtext>
          <S.Lefttext>상상속 여행을 현실로, WetoBee planner</S.Lefttext>
          <S.Leftcontact>contact : wetobeeteam@gmail.com</S.Leftcontact>
        </S.Bottomtext>
      </S.Container>
    </S.FooterBox>
  );
};

export default Footer;

const S = {
  FooterBox: styled.div`
    height: 100px;
  `,
  Top: styled.ul`
    display: flex;
    justify-content: center;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    color: #7c673c;
    background-color: #ffcc5b;
  `,

  Toplist: styled.li`
    margin: 25px;
    font-size: 15px;
  `,

  Container: styled.div`
    height: 130px;
  `,

  BottomTitle: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  Bottomtext: styled.div`
    margin-left: 24px;
  `,

  Left: styled.div`
    font-size: 30px;
    margin: 30px;
    font-family: "Baloo 2", cursive;
  `,

  Lefttext: styled.p`
    font-size: 15px;
    margin-bottom: 20px;
    color: #86868c;
  `,

  Leftcontact: styled.p`
    font-size: 15px;
    color: #86868c;
  `,

  Icons: styled.ul`
    display: flex;
    margin: 10px;
    color: #86868c;
  `,

  Iconslist: styled.li`
    .icons {
      width: 30px;
      margin: 10px;
    }
  `,
};
