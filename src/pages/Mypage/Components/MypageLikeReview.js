import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DEFAULT_COUNT = 4;
const MypageLikeReview = () => {
  const [items, setItems] = useState([]);
  const [reviewCount, setReviewCount] = useState(DEFAULT_COUNT);

  const buttonHandler = () => {
    setReviewCount(prevCount => prevCount + 4);
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.62:3000/review/get-like?offset=0&limit=${reviewCount}&userId=4`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          // authorization: localStorage.getItem("token"),
        },
      }
    )
      .then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setItems(data));
  }, [reviewCount]);

  return (
    <>
      <S.ReviewContainer>
        {items?.data?.map(reviewitem => (
          <S.ReviewBox key={reviewitem.reviewId}>
            <S.ReviewImage src={reviewitem.thumbnail}></S.ReviewImage>
            <S.ReviewPlace>{reviewitem.content}</S.ReviewPlace>
          </S.ReviewBox>
        ))}
      </S.ReviewContainer>
      <S.CommnetViewMore>
        <S.DetailReviewViewMore onMouseDown={buttonHandler}>
          후기더보기▼
        </S.DetailReviewViewMore>
      </S.CommnetViewMore>
    </>
  );
};

const S = {
  ReviewContainer: styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 40px;
  `,
  ReviewBox: styled.div`
    border-radius: 10px;
    width: 400px;
    height: 400px;
    margin-bottom: 70px;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
    justify-content: space-around;
  `,
  ReviewImage: styled.img`
    border: 1px solid white;
    border-radius: 10px;
    width: 330px;
    height: 400px;
  `,
  ReviewPlace: styled.div`
    font-size: 20px;
    padding-top: 20px;
  `,
  CommnetViewMore: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  DetailReviewViewMore: styled.button`
    font-size: 20px;
    margin-top: 20px;
  `,
};

export default MypageLikeReview;
