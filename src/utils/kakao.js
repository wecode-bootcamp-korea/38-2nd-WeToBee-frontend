export function pointsToPath(points) {
  return points.map(point => ({
    lat: point.y,
    lng: point.x,
  }));
}
