import axios from "axios";
const BACKEND_URL = "https://localhost:7295/api";

export async function httpGetAllSurfSpots() {
  const response = axios.get(BACKEND_URL + "/SurfSpots");
  console.log(response.data);
  const SurfSpots = [];

  console.log(response.status);
  for (const key of response.data) {
    const surfSpot = {
      id: response.data[key].id,
      title: response.data[key].title,
      location: response.data[key].location,
      description: response.data[key].description,
      bestMonthsToSurf: response.data[key].bestMonthsToSurf,
      bestTideToSurf: response.data[key].bestTideToSurf,
      dangers: response.data[key].dangers,
      waveLenght: response.data[key].waveLenght,
      waveDiraction: response.data[key].waveDiraction,
    };
    SurfSpots.push(surfSpot);
  }
  return SurfSpots;
}
