import React, { useState } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import Menutab from "../Menutab/Menutab";

const DetailReview = () => {
  const [files, setFiles] = useState();
  const [imagePreview, setImagePreview] = useState("");
  const [comment, setComment] = useState("");

  const postComment = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", files);
    formData.append("comment", comment);
    formData.append("userId", 3);
    formData.append("planId", 13);

    fetch("http://10.58.52.62:3000/review/create", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        reload();
      });

    onReset();
  };

  const reload = () => {
    window.location.reload();
  };

  const onLoadFile = e => {
    const file = e.target.files[0];
    setFiles(file); // input 올린 사진파일

    const reader = new FileReader(); // 파일리더 생성자를 reader라는 변수에 생성

    reader.readAsDataURL(file); // 파일을 base64로 인코딩하고 result라는 속성에 그값을 닮는다

    return new Promise(resolve => {
      reader.onload = () => {
        setImagePreview(reader.result);
        resolve();
      };
    });
  };

  const onComment = e => {
    setComment(e.target.value);
  };

  const onReset = () => {
    setComment("");
  };

  return (
    <>
      <Menutab />
      <S.DetailReview>
        <S.DetailReviewContainer>
          <S.DetailReviewLabel>이용후기</S.DetailReviewLabel>
          <S.DetailReviewContent>
            <S.DetailReviewBox>
              <S.DetailReviewComment onSubmit={postComment}>
                <S.DetailReviewImageUpload
                  type="file"
                  accept="image/*"
                  onChange={onLoadFile}
                />
                {imagePreview && (
                  <S.DetailReviewImagePreview src={imagePreview} alt="image" />
                )}
                <div>
                  <S.DetailReviewInputUpload
                    placeholder="내용을 입력해주세요"
                    onChange={onComment}
                    value={comment}
                  />
                  <S.DetailReviewButton>등록하기</S.DetailReviewButton>
                </div>
              </S.DetailReviewComment>
            </S.DetailReviewBox>
          </S.DetailReviewContent>
          <CommentList />
        </S.DetailReviewContainer>
      </S.DetailReview>
    </>
  );
};
const S = {
  DetailReview: styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #eeecec;
    overflow: auto;
  `,
  DetailReviewContainer: styled.div`
    width: 800px;
    min-height: 100%;
    padding-top: 50px;
    background-color: #ffffff;
  `,
  DetailReviewLabel: styled.div`
    font-size: 25px;
    padding-left: 55px;
    padding-bottom: 20px;
  `,
  DetailReviewContent: styled.div`
    display: flex;
    justify-content: center;
  `,
  DetailReviewBox: styled.div`
    background-color: #eeecec;
  `,
  DetailReviewComment: styled.form`
    width: 700px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  DetailReviewImageUpload: styled.input`
    display: flex;
    justify-content: center;
    background-color: #ffffff;
  `,
  DetailReviewImagePreview: styled.img`
    width: 300px;
    height: 300px;
  `,
  DetailReviewInputUpload: styled.input`
    width: 500px;
    height: 40px;
    margin-top: 20px;
  `,
  DetailReviewButton: styled.button`
    font-size: 20px;
    margin-left: 10px;
    height: 30px;
  `,
};

export default DetailReview;
