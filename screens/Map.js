import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useCallback, useLayoutEffect, useState, useEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { httpGetAllSurfSpots } from "../util/https";

function Map({ navigation }) {
  useEffect(() => {
    async function httpGetSurfSpots() {
      await httpGetAllSurfSpots();
    }
    httpGetSurfSpots();
  });
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
      style={styles.map}
      initialRegion={{ region }}
      onPress={SelectLocationHandler}
    >
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
