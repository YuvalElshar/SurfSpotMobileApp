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
    axios.get(BASE_URL).then((response) => {
      const surfSpotsData = response.data;
      setSurfSpots(surfSpotsData);
      console.log(surfSpotsData);
    });
  };

  return (
    <View>
      <Text>Surf Spots List:</Text>
    </View>
  );
};

export default SurfSpotsComponent;
