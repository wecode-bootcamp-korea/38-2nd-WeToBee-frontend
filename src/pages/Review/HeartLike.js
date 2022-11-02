import React, { useState } from "react";
import styled from "styled-components";
import HeartOn from "../../../src/components/images/HeartOn.png";
import HeartOff from "../../../src/components/images/HeartOff.png";

const HeartLike = props => {
  const [isLike, setIsLike] = useState(false);
  const { reviewId } = props;
  const accessToken = localStorage.getItem("token");

  const isLikedToggle = () => {
    if (!accessToken) {
      alert("회원이 아닙니다.");
      return;
    }
    setIsLike(!isLike);
    fetch(`http://10.58.52.62:3000/review/like?userId=4`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: accessToken,
      },
      body: JSON.stringify({
        reviewId: reviewId,
      }),
    });
  };

  return (
    <Heart onMouseDown={isLikedToggle}>
      {isLike ? (
        <img src={HeartOn} alt="HeartOn" />
      ) : (
        <img src={HeartOff} alt="HeartOff" />
      )}
    </Heart>
  );
};

const Heart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
  }
`;

export default HeartLike;
