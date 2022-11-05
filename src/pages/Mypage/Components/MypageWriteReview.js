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
      `http://10.58.52.62:3000/review/user?offset=0&limit=${reviewCount}&userId=3`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          // authorization: localStorage.getItem("token"),
        },
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setItems(data));
  }, [reviewCount]);

  return (
    <S.CommentView>
      <S.ReviewContainer>
        {items?.data?.map(writeitem => (
          <S.ReviewBox key={writeitem.reviewId}>
            <S.ReviewImage src={writeitem.thumbnail}></S.ReviewImage>
            <S.ReviewWapper>
              <S.ReviewPlace>{writeitem.content}</S.ReviewPlace>
              <S.ReviewData>
                <S.ReviewPlace>{writeitem.createdDay}</S.ReviewPlace>
                <S.ReviewPlace>❤️ {writeitem.likeCount}</S.ReviewPlace>
              </S.ReviewData>
            </S.ReviewWapper>
          </S.ReviewBox>
        ))}
      </S.ReviewContainer>
      <S.CommnetViewMore>
        <S.DetailReviewViewMore onMouseDown={buttonHandler}>
          후기더보기▼
        </S.DetailReviewViewMore>
      </S.CommnetViewMore>
    </S.CommentView>
  );
};

const S = {
  CommentView: styled.div`
    width: 100%;
    height: 100%;
  `,
  ReviewContainer: styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 40px;
  `,
  ReviewBox: styled.div`
    border-radius: 10px;
    width: 100%;
    height: 150px;
    margin-bottom: 70px;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
    justify-content: space-around;
  `,
  ReviewImage: styled.img`
    border: 1px solid white;
    border-radius: 10px;
    width: 150px;
    height: 150px;
  `,
  ReviewWapper: styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-items: center;
    width: 400px;
    height: 100%;
  `,
  ReviewData: styled.div`
    display: flex;
    justify-content: space-around;
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
