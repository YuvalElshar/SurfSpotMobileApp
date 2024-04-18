import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useCallback, useLayoutEffect, useState, useEffect } from "react";
import IconButton from "../components/UI/IconButton";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

function Map({ navigation }) {
  const BASE_URL = "http://10.0.0.25:5001/api/SurfSpots";
  const [surfSpots, setSurfSpots] = useState([]);

  useEffect(() => {
    console.log("Fetching surf spots on map...");
    fetchSurfSpots();
  }, []);

  const fetchSurfSpots = async () => {
    axios.get(BASE_URL).then((response) => {
      const surfSpotsData = response.data;
      setSurfSpots(surfSpotsData);
      console.log(
        surfSpotsData[0].name,
        surfSpotsData[0].latitude,
        surfSpotsData[0].longitude
      );
    });
  };
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function SelectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    navigation.navigate("AddSpot", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          title="save"
          icon="add-circle"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
      headerLeft: ({ tintColor }) => (
        <IconButton
          icon="home"
          size={24}
          color={tintColor}
          onPress={() => navigation.navigate("AddSpot")}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MapView
      mapType="hybrid"
      style={styles.map}
      initialRegion={{ region }}
      onPress={SelectLocationHandler}
    >
      {surfSpots.map((spot) => (
        <Marker
          key={spot.id}
          coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
          title={spot.name}
          onPress={() => navigation.navigate("SpotDetails", { data: spot })}
        />
      ))}
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
