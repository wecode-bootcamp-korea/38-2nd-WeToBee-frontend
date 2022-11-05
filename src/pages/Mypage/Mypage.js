import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MypageWriteReview from "../Mypage/Components/MypageWriteReview";
import MypageLikeReview from "../Mypage/Components/MypageLikeReview";
import MypageLikeMap from "../Mypage/Components/MypageLikeMap";

const Mypage = () => {
  const [openTab, setOpenTab] = useState("내가쓴리뷰");
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("http://10.58.52.62:3000/user/personal-information?userId=3", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // authorization: localStorage.getItem("token"),
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(result => setUserInfo(result));
  }, []);

  const MAPPING_OBJ = {
    내가쓴리뷰: <MypageWriteReview />,
    내가좋아요한리뷰: <MypageLikeReview />,
    내가좋아요한맵: <MypageLikeMap />,
  };

  return (
    <S.Mypage>
      <S.MypageMenuBar>
        <S.MypageBlank></S.MypageBlank>
        <S.MypageHeader>
          <S.MypageTitle>Mypage</S.MypageTitle>
          <S.MypageName>
            <div>{userInfo?.data.nickname}님 , 반갑습니다</div>
            <div>잔여포인트 {userInfo?.data.point.toLocaleString()}</div>
          </S.MypageName>
        </S.MypageHeader>
        <S.MypageBlank></S.MypageBlank>
        <S.MypageMenuBarWrapper>
          {Object.keys(MAPPING_OBJ).map((tab, index) => (
            <S.MypageMenuBarUl key={index} onClick={() => setOpenTab(tab)}>
              <S.MypageMenuBarLi>{tab}</S.MypageMenuBarLi>
            </S.MypageMenuBarUl>
          ))}
        </S.MypageMenuBarWrapper>
        <S.MypageBlank></S.MypageBlank>
      </S.MypageMenuBar>
      <S.MypageOpenTab>{MAPPING_OBJ[openTab]}</S.MypageOpenTab>
    </S.Mypage>
  );
};
const S = {
  Mypage: styled.div`
    width: 100vw;
    height: 100%;
    background-color: #eeecec;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  MypageMenuBar: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  MypageHeader: styled.div`
    width: 80%;
    height: 200px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    padding-left: 30px;
    background-color: white;
  `,
  MypageTitle: styled.div`
    font-size: 40px;
    font-weight: bold;
  `,
  MypageName: styled.div`
    font-size: 20px;
    line-height: 40px;
  `,
  MypageBlank: styled.div`
    width: 80%;
    height: 30px;
  `,
  MypageMenuBarWrapper: styled.div`
    display: flex;
    width: 80%;
    height: 100px;
  `,
  MypageMenuBarUl: styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100px;
    font-size: 20px;
    background-color: white;
    border-top: 3px solid #666666;
    &:hover {
      color: black;
      border-bottom: 5px solid #39d094;
    }
  `,
  MypageMenuBarLi: styled.li`
    font-size: 20px;
  `,
  MypageOpenTab: styled.div`
    background-color: white;
    width: 80%;
  `,
};

export default Mypage;
