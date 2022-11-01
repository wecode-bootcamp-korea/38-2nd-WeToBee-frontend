// kakaomap 컴포넌트와 ProductPlannerDetail 컴포넌트간의 공동 사용 함수를 바깥에 빼내서 사용하기위해 만든 유틸 컴포넌트

// Drawing Manager에서 가져온 데이터 중
// 선과 다각형의 꼭지점 정보를 latlng 배열로 반환하는 함수입니다
export function pointsToPath(points) {
  return points.map(point => ({
    lat: point.y,
    lng: point.x,
  }));
}
