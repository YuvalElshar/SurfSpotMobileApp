import { ScrollView, TextInput, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/colors";
import LocationPicker from "./LocationPicker";

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
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={spotTitle}
        />
      </View>
      <LocationPicker />
    </ScrollView>
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
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 1,
    padding: 6,
    color: Colors.primary500,
  },
});
