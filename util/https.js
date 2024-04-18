import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const BASE_URL = "http://10.0.0.25:5001/api/SurfSpots";

const SurfSpotsComponent = () => {
  const [surfSpots, setSurfSpots] = useState([]);

  useEffect(() => {
    console.log("Fetching surf spots...");
    fetchSurfSpots();
  }, []);

  const fetchSurfSpots = async () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        const surfSpotsData = response.data;
        setSurfSpots(surfSpotsData);
        console.log(surfSpotsData);
      })
      .catch(console.log);
  };

  return (
    <View>
      <Text>Surf Spots List:</Text>
      <View>
        {surfSpots.map((surfSpot, index) => (
          <View key={index}>
            <Text>Name: {surfSpot.Name}</Text>
            <Text>Latitude: {surfSpot.Latitude}</Text>
            <Text>Longitude: {surfSpot.Longitude}</Text>
            <Text>Info: {surfSpot.Info}</Text>
            <Text>Best Months to Surf: {surfSpot.BestMonthsToSurf}</Text>
            <Text>Best Tide to Surf: {surfSpot.BestTideToSurf}</Text>
            <Text>Dangers: {surfSpot.Dangers}</Text>
            <Text>Wave Length: {surfSpot.WaveLength}</Text>
            <Text>Wave Direction: {surfSpot.WaveDirection}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SurfSpotsComponent;
