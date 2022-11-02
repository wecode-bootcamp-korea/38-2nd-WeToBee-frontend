import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import HeartLike from "./HeartLike";

const LIMIT = 10;

const Review = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `http://10.58.52.62:3000/review/images?offset=${offSet}&limit=${LIMIT}`
    );
    const { data } = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    setItems([...items, ...commentsFormServer]);
    const isEnd = commentsFormServer.length < LIMIT;
    setHasMore(!isEnd);
    setOffSet(offSet + LIMIT);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
    >
      <S.ReviewContainer>
        {items?.map(reviewItem => (
          <S.ReviewBox key={reviewItem.reviewId}>
            <S.ReviewImage src={reviewItem.thumbnail} />
            <HeartLike reviewId={reviewItem.reviewId} />
          </S.ReviewBox>
        ))}
      </S.ReviewContainer>
    </InfiniteScroll>
  );
};

const S = {
  InfiniteScroll: styled.div`
    width: 100vw;
    height: 100vh;
  `,
  ReviewContainer: styled.div`
    padding: 40px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
};

export default Review;
