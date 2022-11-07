import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PlannerCard = () => {
  const [isUserData, setIsUserData] = useState([]);

  useEffect(() => {
    fetch("http://3.34.40.236:3000/plan/userplan", {
      method: "GET",
      headers: { authorization: localStorage.getItem("accessToken") },
    })
      .then(res => res.json())
      .then(data => setIsUserData(data));
  }, []);

  // console.log(isUserData);

  return (
    <S.PlanContainer>
      {isUserData &&
        isUserData.plan?.map(userData => {
          return (
            <S.planBox key={userData.planId}>
              <StyledLink to={`/planner-detail-page/${userData.planId}`}>
                <S.Img src="https://images.pexels.com/photos/3754686/pexels-photo-3754686.jpeg?auto=compress&cs=tinysrgb&w=800" />
                <S.Nickname>{userData.nickname}</S.Nickname>
                <div>
                  {userData.start_date.replace(/\T.*/, " ")} ~{" "}
                  {userData.end_date.replace(/\T.*/, " ")}
                </div>
              </StyledLink>
            </S.planBox>
          );
        })}
    </S.PlanContainer>
  );
};

export default PlannerCard;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const S = {
  PlanContainer: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `,
  planBox: styled.div`
    margin: 10px;
  `,
  Img: styled.img`
    width: 300px;
    height: 300px;
  `,
  Nickname: styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  `,
};
