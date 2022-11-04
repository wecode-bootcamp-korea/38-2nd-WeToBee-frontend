import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DEFAULT_COUNT = 2;
const CommentList = () => {
  const [commentData, setCommentData] = useState([]);
  const [commentCount, setCommentCount] = useState(DEFAULT_COUNT);

  const buttonHandler = () => {
    setCommentCount(prevCount => prevCount + 2);
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.62:3000/review/plans?offset=0&limit=${commentCount}&planId=13`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, [commentCount]);

  const removeComment = eventReviewId => {
    fetch(
      `http://10.58.52.62:3000/review/delete?userId=3&reviewId=${eventReviewId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          // authorization: localStorage.getItem("token"),
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
        reload();
      });
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      {commentData.data &&
        commentData.data.map(comments => (
          <S.DetailReviewImpression key={comments.reviewId}>
            <S.DetailReviewIdData>
              <S.DetailReviewId>{comments.nickname}</S.DetailReviewId>
              <S.DetailReviewData>{comments.content}</S.DetailReviewData>
            </S.DetailReviewIdData>
            <S.DetailReviewContentsImage>
              <S.DetailReviewDeleteContents>
                <S.DetailReviewContents>
                  {/* {comments.content} */}
                </S.DetailReviewContents>
                <S.DetailReviewDelete
                  onClick={() => removeComment(comments.reviewId)}
                >
                  삭제
                </S.DetailReviewDelete>
              </S.DetailReviewDeleteContents>
              <S.DetailReviewImage src={comments.thumbnail} />
            </S.DetailReviewContentsImage>
          </S.DetailReviewImpression>
        ))}
      <S.CommnetViewMore>
        <S.DetailReviewViewMore onMouseDown={buttonHandler}>
          후기더보기▼
        </S.DetailReviewViewMore>
      </S.CommnetViewMore>
    </>
  );
};
const S = {
  DetailReviewImpression: styled.div`
    display: flex;
    border-bottom: 1px solid #eeecec;
  `,
  DetailReviewIdData: styled.div`
    width: 200px;
    height: 300px;
    padding: 30px 20px 20px 50px;
  `,
  DetailReviewId: styled.div`
    font-weight: bold;
  `,
  DetailReviewData: styled.div`
    padding-top: 20px;
  `,
  DetailReviewContentsImage: styled.div`
    padding: 20px 20px 20px 50px;
  `,
  DetailReviewDeleteContents: styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  DetailReviewContents: styled.div`
    font-size: 20px;
  `,
  DetailReviewDelete: styled.button`
    font-size: 20px;
  `,

  DetailReviewImage: styled.img`
    width: 400px;
    height: 300px;
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

export default CommentList;
