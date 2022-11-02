import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Map, Polyline, MapMarker, Polygon } from "react-kakao-maps-sdk";
import { pointsToPath } from "../../utils";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductPlannerDetailPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const { planId } = useParams();

  const [userCreateMapData, setUserCreateMapData] = useState({});

  // 데이터 값을 받아와서 사용자가 만든 데이터 값이 맵에 적혀짐
  useEffect(() => {
    fetch(`http://10.58.52.75:3000/plan/plandetail/${planId}`, {
      method: "GET",
      headers: { "content-Type": "application/json" },
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
    fetch(`http://10.58.52.75:3000/plan/sellingplan/1/${planid}`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
    });
  };

  return (
    <S.Main>
      <div>
        <S.TravelText>여행</S.TravelText>
        <S.MapAndDate>
          <S.MapStyle>
            <Map
              center={{
                //MAP: 지도의 중심좌표
                lat: 36.57171,
                lng: 127.896262,
              }}
              style={{
                width: "700px",
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
          <div>
            {start} ~ {end}
          </div>
        </S.MapAndDate>
        <div>
          <S.SaleButton onClick={salesButton}>판매하기</S.SaleButton>
        </div>
      </div>
    </S.Main>
  );
};

const S = {
  MapAndDate: styled.div`
    display: flex;
    justify-content: center;
  `,
  TravelText: styled.div`
    font-size: 35px;
    font-weight: 500;
    color: rgb(85, 85, 85);
    margin-top: 20px;
    margin-bottom: 20px;
  `,
  Main: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(245, 245, 245);
    top: 150px;
  `,
  MapStyle: styled.div`
    padding-right: 10px;
  `,
  SaleButton: styled.button`
    width: 50px;
  `,
};

export default ProductPlannerDetailPage;
