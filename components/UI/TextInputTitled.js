import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

function TextInputTitled({ label, spotTitle, changeTitleHandler }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={label}
        style={styles.input}
        onChangeText={changeTitleHandler}
        value={spotTitle}
      />
    </View>
  );
}

export default TextInputTitled;

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 2,
    color: Colors.primary700,
  },
  input: {
    margin: 16,
    marginTop: 0,
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
});
