import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PlannerCard from "../PlannerCard";
const Product = () => {
  const [allSellingData, setAllSellingData] = useState([]);
  const [areaSellingData, setAreaSellinData] = useState([]);

  useEffect(() => {
    fetch("http://10.58.52.75:3000/plan/sellstate/2", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setAllSellingData(data));
  }, []);

  return (
    <S.Main>
      <S.LogoSection>
        <S.PlannerLogoCenterImg src="https://cdn.pixabay.com/photo/2017/11/13/22/12/compass-2946959__480.jpg" />
        <S.PlannerCreateForm>
          <S.PlannerText primary="20px" marginTop="30px" marginBottom="10px">
            상상속 한국 여행
          </S.PlannerText>
          <S.PlannerText primary="30px" marginBottom="20px">
            현실로 만들어 보세요
          </S.PlannerText>
          <S.PlannerTextSeccond margin="4px">
            다양한 여행자들이 만들어낸
          </S.PlannerTextSeccond>
          <S.PlannerTextSeccond margin="70px">
            한국 여행을 즐겨 보세요
          </S.PlannerTextSeccond>
          <Link to="/planner-detail-create">
            <S.PlannerButton>플래너 시작하기</S.PlannerButton>
          </Link>
        </S.PlannerCreateForm>
      </S.LogoSection>
      <S.myCreatePlanner>
        <div>
          <S.MyCreatePlannerTextParents>
            <S.myCreatePlannerText>판매중인 PLANNER</S.myCreatePlannerText>
          </S.MyCreatePlannerTextParents>
          <div>
            {allSellingData &&
              allSellingData.plan?.map(userData => {
                return (
                  <div key={userData.planId}>
                    <Link to={`/planner-detail-page/${userData.planId}`}>
                      <img src="https://images.pexels.com/photos/3754686/pexels-photo-3754686.jpeg?auto=compress&cs=tinysrgb&w=800" />
                      <div>{userData.nickname}</div>
                      <div>
                        {userData.start_date.replace(/\T.*/, " ")} ~{" "}
                        {userData.end_date.replace(/\T.*/, " ")}
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </S.myCreatePlanner>
    </S.Main>
  );
};

const S = {
  Main: styled.main`
    margin-top: 40px;
    width: 100vw;
    height: 100vh;
    background: rgb(245, 245, 245);
  `,
  LogoSection: styled.section`
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  `,

  PlannerLogoCenterImg: styled.img`
    width: 620px;
    height: 320px;
    border-radius: 10px;
  `,

  PlannerCreateForm: styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 35px 35px 0;
    margin-left: 15px;
    width: 430px;
    height: 330px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    background: rgb(245, 245, 245);
  `,

  PlannerText: styled.div`
    font-weight: 300;
    font-size: ${props => props.primary};
    margin-bottom: 15px;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
  `,

  PlannerTextSeccond: styled.div`
    font-size: 21px;
    font-weight: 350;
    margin-bottom: ${props => props.margin};
  `,

  PlannerButton: styled.button`
    border-radius: 30px;
    margin-right: 5px;
    text-align: center;
    width: 100%;
    text-decoration: none;
    font-weight: 300;
    color: #fff;
    font-size: 14pt;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #ee685a;
    color: #ee685a;
    cursor: pointer;
    &:hover {
      pointer-events: fill;
      background-color: pink;
    }
  `,
  myCreatePlanner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px 50px 25px 50px;
  `,

  myCreatePlannerText: styled.div`
    width: 1000px;
    font-size: 20px;
    font-weight: 300;
    color: black;
    padding-bottom: 15px;
  `,

  MyCreatePlannerTextParents: styled.div`
    width: 100%;
  `,

  mockImg: styled.img`
    width: 100px;
    height: 150px;
  `,
};

export default Product;
