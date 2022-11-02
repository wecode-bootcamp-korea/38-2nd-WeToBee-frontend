import React from "react";
import styled from "styled-components";

const ProductPlannerList = () => {
  return (
    <S.Main>
      <S.LogoSection>
        <S.PlannerLogoImg
          src="/images/ProductPlannerLeftImg.png"
          alt="PlannerLogo"
        />
        <S.PlannerLogoCenterImg
          src="/images/ProductPlannerCenterImg.png"
          alt="PlannerLogo"
        />
        <S.PlannerLogoImg
          src="/images/ProductPlannerRightImg.png"
          alt="PlannerLogo"
        />
        <S.PlannerCreateForm>
          <S.PlannerText marginTop="10px">상상속 한국 여행</S.PlannerText>
          <S.PlannerText primary="18px">현실로 만들어 보세요</S.PlannerText>
          <S.PlannerTextSeccond margin="4px">
            다양한 여행자들이 만들어낸
          </S.PlannerTextSeccond>
          <S.PlannerTextSeccond margin="25px">
            한국 여행을 즐겨 보세요
          </S.PlannerTextSeccond>
          <S.PlannerButton>플래너 시작하기</S.PlannerButton>
        </S.PlannerCreateForm>
      </S.LogoSection>
      <S.myCreatePlanner>
        <div>
          <S.myCreatePlannerTextParents>
            <S.myCreatePlannerText>내가 만든 플래너</S.myCreatePlannerText>
          </S.myCreatePlannerTextParents>
          <div>
            <S.mockImg
              src="/images/ProductPlannerRightImg.png"
              alt="PlannerLogo"
            />
          </div>
        </div>
      </S.myCreatePlanner>
    </S.Main>
  );
};

const S = {
  Main: styled.main`
    margin-top: 100px;
    width: 100vw;
    height: 100vh;
    background: rgb(245, 245, 245);
  `,
  LogoSection: styled.section`
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  `,

  PlannerLogoImg: styled.img`
    width: 20%;
  `,

  PlannerLogoCenterImg: styled.img`
    width: 10%;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 3px black);
  `,

  PlannerCreateForm: styled.div`
    padding: 35px;
    margin-left: 15px;
    width: 350px;
    height: 250px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    background: rgb(245, 245, 245);
  `,

  PlannerText: styled.div`
    font-weight: 300;
    font-size: ${props => props.primary};
    margin-bottom: 15px;
    margin-top: ${props => props.marginTop};
  `,

  PlannerTextSeccond: styled.div`
    font-size: 15px;
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
    font-size: 14pt;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #ee685a;
    color: #ee685a;
    cursor: pointer;
    &:hover {
      color: black;
      pointer-events: fill;
      background-color: pink;
    }
  `,
  myCreatePlanner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px 50px;
  `,

  myCreatePlannerText: styled.div`
    width: 1000px;
    font-size: 20px;
    font-weight: 300;
    color: black;
    padding-bottom: 15px;
  `,

  myCreatePlannerTextParents: styled.div`
    width: 100%;
  `,

  mockImg: styled.img`
    width: 100px;
    height: 150px;
  `,
};

export default ProductPlannerList;
