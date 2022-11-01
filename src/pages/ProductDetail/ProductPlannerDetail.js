import { useState } from "react";
import DatePicker from "react-datepicker";
import { Map, Polyline, MapMarker, Polygon } from "react-kakao-maps-sdk";
import { pointsToPath } from "../../utils";
import styled from "styled-components";

const MOCK_POINT = {
  circle: [],
  ellipse: [],
  marker: [
    {
      type: "marker",
      x: 128.04511733198515,
      y: 37.00416637576114,
      coordinate: "wgs84",
      zIndex: 0,
      content: "",
    },
    {
      type: "marker",
      x: 126.88401154452076,
      y: 36.4366056510582,
      coordinate: "wgs84",
      zIndex: 0,
      content: "",
    },
    {
      type: "marker",
      x: 127.98036117014014,
      y: 35.519040164457344,
      coordinate: "wgs84",
      zIndex: 0,
      content: "",
    },
  ],
  polyline: [],
  rectangle: [],
  polygon: [],
};

const ProductPlannerDetailPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(null);

  const onChangeDates = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
              {MOCK_POINT.polyline.map(({ points, options }, i) => (
                <Polyline key={i} path={pointsToPath(points)} {...options} />
              ))}
              {MOCK_POINT.marker.map(({ x, y, zIndex }, i) => (
                <MapMarker
                  key={i}
                  position={{
                    lat: y,
                    lng: x,
                  }}
                  zIndex={zIndex}
                />
              ))}
              {MOCK_POINT.polygon.map(({ options, points }, i) => (
                <Polygon key={i} path={pointsToPath(points)} {...options} />
              ))}
            </Map>
          </S.MapStyle>
          <DatePicker
            style={{ width: "100px" }}
            selected={startDate}
            onChange={onChangeDates}
            startDate={startDate}
            endDate={endDate}
            inline
            selectsRange
          />
        </S.MapAndDate>
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
};

export default ProductPlannerDetailPage;
