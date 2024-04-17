import { ScrollView, TextInput, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/colors";
import LocationPicker from "./LocationPicker";
import OutlinedButton from "./UI/OutlinedButton";
import TextInputTitled from "./UI/TextInputTitled";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import DropdownComponent from "./UI/DropdownComponent";
import MultiSelectComponent from "./UI/MultiSelectComponent";

function SpotForm() {
  const [spotTitle, setSpotTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bestMonthsToSurf, setBestMonthsToSurf] = useState("");
  const [bestTideToSurf, setBestTideToSurf] = useState("");
  const [dangers, setDangers] = useState("");
  const [waveLenght, setWaveLenght] = useState("");
  const [waveDiraction, setWaveDiraction] = useState("");
  const [rating, setRating] = useState("");

  function changeTitleHandler(enteredText) {
    setSpotTitle(enteredText);
  }

  return (
    <KeyboardAwareScrollView style={styles.form}>
      <LocationPicker />

      <TextInputTitled
        label="Spot name*"
        value={spotTitle}
        onChange={changeTitleHandler}
      />
      <DropdownComponent />
      <MultiSelectComponent />

      <View style={styles.actions}>
        <OutlinedButton icon="location">Add to my Spots</OutlinedButton>
        <OutlinedButton icon="map">Add to SurfSpot</OutlinedButton>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SpotForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 1,

    padding: 6,
    color: Colors.primary700,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
