import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Map, DrawingManager, ZoomControl } from "react-kakao-maps-sdk";
import styled from "styled-components";
import DatePicker from "react-datepicker";

const { kakao } = window;

const KakaoMap = () => {
  const [level, setLevel] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  console.log(startDate);

  console.log(endDate);

  const managerRef = useRef(null);
  const [position, setPosition] = useState();
  const [overlayData, setOverlayData] = useState({
    arrow: [],
    circle: [],
    ellipse: [],
    marker: [],
    polygon: [],
    polyline: [],
    rectangle: [],
  });

  function selectOverlay(type) {
    const manager = managerRef.current;
    manager.cancel();
    manager.select(type);
  }

  console.log(overlayData);

  function drawOverlayData() {
    const manager = managerRef.current;
    setOverlayData(manager.getData());
    fetch("http://3.34.40.236:3000/plan/insert", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        ...manager.getData(),
        startDate: startDate
          .toISOString()
          .replace("T", " ")
          .replace(/\..*/, ""),
        endDate: endDate.toISOString().replace("T", " ").replace(/\..*/, ""),
      }),
    });
  }

  return (
    <S.background>
      <Map
        center={{
          lat: 36.57171,
          lng: 127.896262,
        }}
        style={{
          width: "86vw",
          height: "100vh",
        }}
        level={13}
        onZoomChanged={map => setLevel(map.getLevel())}
        onClick={(_t, mouseEvent) =>
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      >
        <ZoomControl />
        <DrawingManager
          ref={managerRef}
          drawingMode={[
            kakao.maps.drawing.OverlayType.CIRCLE,
            kakao.maps.drawing.OverlayType.ELLIPSE,
            kakao.maps.drawing.OverlayType.MARKER,
            kakao.maps.drawing.OverlayType.POLYLINE,
            kakao.maps.drawing.OverlayType.RECTANGLE,
            kakao.maps.drawing.OverlayType.POLYGON,
          ]}
          guideTooltip={["draw", "drag", "edit"]}
          markerOptions={{
            //MARK: 마커 옵션입니다
            draggable: true, //MARK: 마커를 그리고 나서 드래그 가능하게 합니다
            removable: true, //MARK: 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다
          }}
          polylineOptions={{
            //LINE: 선 옵션입니다
            draggable: true, //LINE: 그린 후 드래그가 가능하도록 설정합니다
            removable: true, //LINE: 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
            editable: true, //LINE: 그린 후 수정할 수 있도록 설정합니다
            strokeColor: "black", //LINE: 선 색
            hintStrokeStyle: "dash", //LINE: 그리중 마우스를 따라다니는 보조선의 선 스타일
            hintStrokeOpacity: 0.5, //LINE: 그리중 마우스를 따라다니는 보조선의 투명도
          }}
        />
      </Map>
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <S.DrawingButton
            onClick={e => {
              selectOverlay(kakao.maps.drawing.OverlayType.MARKER);
            }}
          >
            Mark
          </S.DrawingButton>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <S.ButtonBox>
            <S.SaveButton onClick={drawOverlayData}>SAVE</S.SaveButton>
          </S.ButtonBox>
          <S.ButtonBox>
            <Link to="/product-planner-list">
              <S.SaveButton>MOVE</S.SaveButton>
            </Link>
          </S.ButtonBox>
        </div>
      </div>
    </S.background>
  );
};

const S = {
  background: styled.div`
    display: flex;
    justify-content: center;
    background: rgb(245, 245, 245);
  `,
  DrawingButton: styled.button`
    font-size: 18px;
    position: relative;
    width: 117px;
    height: 30px;
    cursor: default;
    color: #000000;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #ffffff;

    &:hover {
      cursor: pointer;
      color: black;
      box-shadow: 0 0 40px 40px rgb(230, 230, 230) inset;
    }
  `,
  SaveButton: styled.button`
    width: 241px;
    font-weight: 700;
    border: 2px solid lightGrey;
    border-radius: 0.6em;
    padding: 0.5em 2em;
    margin-top: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
      box-shadow: 0 0 40px 40px rgb(55, 105, 160) inset;
    }

    &:hover,
    &:focus {
      color: lightGrey;
      outline: 0;
    }
  `,
  DrawingButton: styled.div`
    width: 240px;
    height: 40px;
    padding: 8px 32px;
    margin-top: 5px;
    border: 2px solid lightgray;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    &:hover {
      background-color: #1b6aaa;
      color: #ededed;
      transition-duration: 1s;
    }
  `,

  ButtonBox: styled.div`
    margin-top: 10px;
  `,
};

export default KakaoMap;
