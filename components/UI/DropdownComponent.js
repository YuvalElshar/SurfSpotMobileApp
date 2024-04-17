import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../constants/colors";

const directionData = [
  { label: "Right", value: "Right" },
  { label: "Left", value: "Left" },
  { label: "Right&Left", value: "Right&Left" },
  { label: "A Frame", value: "A Frame" },
];
const bestTideData = [
  { label: "Low to mid", value: "Low to mid" },
  { label: "mid to high", value: "mid to high" },
  { label: "High to mid", value: "High to mid" },
  { label: "Mid to low", value: "Mid to low" },
  { label: "All tides", value: "All tides" },
];
const waveLengthData = [
  { label: "Very Short", value: "Very Short" },
  { label: "Short", value: "Short" },
  { label: "Short-Average", value: "Short-Average" },
  { label: "Average", value: "Average" },
  { label: "Average-Long", value: "Average-Long" },
  { label: "Long", value: "Long" },
  { label: "Very Long", value: "Very Long" },
];

function DropdownComponent() {
  const [directionValue, setDirectionValue] = useState(null);
  const [tidesValue, setTidesValue] = useState(null);
  const [waveLenghtValue, setWaveLenghtValue] = useState(null);
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={directionData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Wave Direction"}
        value={directionValue}
        onChange={(item) => {
          setDirectionValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={bestTideData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Best Tides"}
        value={tidesValue}
        onChange={(item) => {
          setTidesValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={waveLengthData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Wave Length"}
        value={waveLenghtValue}
        onChange={(item) => {
          setWaveLenghtValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      />
    </View>
  );
}

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderColor: Colors.primary700,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "98%",
    marginHorizontal: 0,
    fontSize: 16,
    backgroundColor: Colors.primary100,

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.41,
  },
  icon: {
    marginRight: 5,
    color: Colors.primary700,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.primary700,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.primary700,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
