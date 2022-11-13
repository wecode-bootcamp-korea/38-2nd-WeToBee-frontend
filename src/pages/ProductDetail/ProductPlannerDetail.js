import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Map, Polyline, MapMarker, Polygon } from "react-kakao-maps-sdk";
import { pointsToPath } from "../../utils";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import DetailReview from "../DetailReview/DetailReview";

const ProductPlannerDetailPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const { planId } = useParams();

  const [userCreateMapData, setUserCreateMapData] = useState({});

  // 데이터 값을 받아와서 사용자가 만든 데이터 값이 맵에 적혀짐
  useEffect(() => {
    fetch(`http://3.34.40.236:3000/plan/plandetail/${planId}`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then(res => res.json())
      .then(data => setUserCreateMapData(data));
  }, [planId]);

  const data = userCreateMapData?.plan?.reduce(
    (acc, curr) => ({ ...acc, marker: [...acc.marker, curr.data.marker[0]] }),
    {
      circle: [],
      ellipse: [],
      marker: [],
      polyline: [],
      rectangle: [],
      polygon: [],
    }
  );

  const start = userCreateMapData?.plan?.[0].start_date.replace(/\T.*/, " ");
  const end = userCreateMapData?.plan?.[0].end_date.replace(/\T.*/, " ");
  const planid = userCreateMapData?.plan?.[0].plan_id;

  const salesButton = () => {
    fetch(`http://3.34.40.236:3000/plan/sellingplan/${planid}`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    });
  };

  return (
    <S.Main>
      <S.TravelText>여행</S.TravelText>
      <S.MainWrapper>
        <S.MainComponent>
          <S.MapAndDate>
            <S.MapStyle>
              <Map
                center={{
                  //MAP: 지도의 중심좌표
                  lat: 36.57171,
                  lng: 127.896262,
                }}
                style={{
                  width: "600px",
                  height: "600px",
                }}
                level={13} // 지도의 확대 레벨
              >
                {data?.polyline?.map(({ points, options }, i) => (
                  <Polyline key={i} path={pointsToPath(points)} {...options} />
                ))}
                {data?.marker?.map(({ x, y, zIndex }, i) => (
                  <MapMarker
                    key={i}
                    position={{
                      lat: y,
                      lng: x,
                    }}
                    zIndex={zIndex}
                  />
                ))}
                {data?.polygon?.map(({ options, points }, i) => (
                  <Polygon key={i} path={pointsToPath(points)} {...options} />
                ))}
              </Map>
            </S.MapStyle>
          </S.MapAndDate>
        </S.MainComponent>
        <S.MainCount>
          <S.MainContentData>
            {start} ~ {end}
          </S.MainContentData>
          <S.SaleButton onClick={salesButton}>판매하기</S.SaleButton>
        </S.MainCount>
      </S.MainWrapper>
      <DetailReview planId={planId} />
    </S.Main>
  );
};

const S = {
  Main: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(245, 245, 245);
  `,
  MainComponent: styled.div`
    display: flex;
  `,
  MapAndDate: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  MainWrapper: styled.div`
    display: flex;
    width: 800px;
  `,
  TravelText: styled.div`
    font-size: 35px;
    font-weight: 500;
    padding: 30px 0px;
    color: rgb(85, 85, 85);
  `,
  MapStyle: styled.div`
    width: 600px;
  `,
  MainContentData: styled.div`
    font-size: 20px;
    padding: 30px 0px;
  `,
  SaleButton: styled.button`
    width: 150px;
    height: 50px;
    font-size: 20px;
    border-radius: 10px;
    &:hover {
      background-color: #1b6aaa;
      color: white;
      transition-duration: 0.5s;
    }
  `,
  MainCount: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: white;
    width: 200px;
  `,
  SaleButton: styled.button`
    width: 50px;
  `,
};

export default ProductPlannerDetailPage;
